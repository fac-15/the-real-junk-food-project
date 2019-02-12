import React from "react";
import ReactDOM from "react-dom";
import Form from "./form.js";

describe("Form component tests", () => {
  test("The form renders", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Form />, root);
  });
});
