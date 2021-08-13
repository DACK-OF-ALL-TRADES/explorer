import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../index";

test("renders element", async () => {
  render(
    <Router>
      <Nav />
    </Router>
  );
  const headingElement = screen.getByText(/Explorer/i);
  expect(headingElement).toBeInTheDocument();
});
