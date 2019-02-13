const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const loginCall = require("./loginCall");
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  loginCall(req.body, result => {
    res.send(result);
  });
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () =>
  console.log(`Express server is running on port ${port}`)
);
