import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import cityData from "../utils/cities";

const cityAmount = cityData.length;

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("Number of cities should be greater than or equal to 100", () => {
  expect(cityAmount).toBeGreaterThanOrEqual(100);
});

test("The city data should contain 'country' property", () => {
  expect(cityData[0]).toHaveProperty("country");
});

test("The first city data should have the 'country' property with the value of China", () => {
  expect(cityData[0]).toHaveProperty("country", "China");
});

test("The city data shouldn't be empty", () => {
  cityData.forEach((city) => {
    expect(city).toHaveProperty("city");
    expect(city).toHaveProperty("country");
    expect(city).toHaveProperty("continent");
    expect(city).toHaveProperty("climate");
    expect(city).toHaveProperty("pop");
    expect(city).toHaveProperty("image");
    expect(city).toHaveProperty("youtube");
    expect(city).toHaveProperty("position");
  });
});
