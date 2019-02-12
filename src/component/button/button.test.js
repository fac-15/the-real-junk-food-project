import React from "react";
import ReactDOM from "react-dom";
import Button from "./button.js";

test("The button renders", () => {
  const root = document.createElement("div");
  ReactDOM.render(<Button />, root);
});

test("Jest is working", () => {
  expect(true).toBeTruthy();
});
