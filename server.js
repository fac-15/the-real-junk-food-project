const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const getUser = require("./getUser");
const getDriver = require("./getDriver");
const getCode = require("./getCode");
const createRecord = require("./createRecord");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  getUser(req.body, (err, result) => {
    if (err) {
      console.log("Error, login route", err);
    } else if (result === false) {
      res.json({
        success: false
      });
    } else {
      console.log("result isss: ", result);
      let token = jwt.sign(
        { username: result.name, id: result.id, userRole: result.userRole },
        "Charlie is not a bitch",
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
      console.log("getCode error", error);
    }
    if (code.Code === req.body.dailyCode) {
      getDriver(req.body, (err, result) => {
        console.log("verify route req.body", req.body);
        if (err) {
          console.log("ya done err", err);
        } else if (result === false) {
          res.json({
            success: false
          });
        } else {
          console.log("and result again", result);
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
