const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const getUser = require("./src/apiCalls/getUser");
const getDriver = require("./src/apiCalls/getDriver");
const getCode = require("./src/apiCalls/getCode");
const createRecord = require("./src/apiCalls/createRecord");
const updateCode = require("./src/apiCalls/updateCode");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 8080;
const cronJob = require("cron").CronJob;

new cronJob(
  "5 0 * * *",
  () => {
    updateCode();
  },
  null,
  true,
  "Europe/London"
);

const env = require("env2");
env("./config.env");

if (!process.env.COOKIE_SECRET) {
  throw new Error("COOKIE_SECRET environment variable should be set");
}

const secret = process.env.COOKIE_SECRET;

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  getUser(req.body, (err, result) => {
    if (err) {
      console.log("getUser error in /login: ", err);
    } else if (result === false) {
      res.json({
        success: false
      });
    } else {
      let token = jwt.sign(
        { username: result.name, id: result.id, userRole: result.userRole },
        secret,
        { expiresIn: 86400 }
      );
      res.json({
        sucess: true,
        err: null,
        token
      });
    }
  });
});

app.post("/verify", (req, res) => {
  getCode((error, code) => {
    if (error) {
      console.log("getCode error in /verify: ", error);
    }
    if (code.Code === req.body.dailyCode) {
      getDriver(req.body, (err, result) => {
        if (err) {
          console.log("getDriver error in /verify: ", err);
        } else if (result === false) {
          res.json({
            success: false
          });
        } else {
          createRecord(req.body);
          res.json({ success: true, err: null, name: result.name });
        }
      });
    } else {
      res.json({ success: false });
    }
  });
});

app.get("/getcode", (req, res) => {
  getCode((err, code) => {
    if (err) {
      console.log("getCode error in /getCode: ", err);
    }
    res.send(code);
  });
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () =>
  console.log(`Express server is running on port ${port}`)
);
