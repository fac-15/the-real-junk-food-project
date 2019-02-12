import React from "react";
import { render, cleanup } from "react-testing-library";
import Form from "./form.js";

//Ensures that the document gets cleared after each test
afterEach(cleanup);

describe("Form component tests", () => {
  test("The form renders", () => {
    render(<Form />);
  });
});
