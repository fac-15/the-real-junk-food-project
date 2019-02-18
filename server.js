const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const getUser = require("./getUser");
const getCode = require("./getCode");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  getUser(req.body, (err, result) => {
    if (err) {
    } else if (result === false) {
      res.json({
        success: false
      });
    } else {
      let token = jwt.sign(
        { username: result.name, pin: result.id },
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
