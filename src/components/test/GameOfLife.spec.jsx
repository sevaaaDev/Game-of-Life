import { describe, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { GameOfLife } from "../GameOfLife.jsx";

describe("Game of life", () => {
  it("shows the correct next gen after click btn", () => {
    let user = userEvent.setup();
    render(<GameOfLife />);
    let square1 = screen.getByTestId("square1");
    let square2 = screen.getByTestId("square2");
    let square3 = screen.getByTestId("square3");
    let square4 = screen.getByTestId("square4");
    let square5 = screen.getByTestId("square5");
    let next = screen.getByTestId("btn-next");
    user.click(square2);
    user.click(square3);
    user.click(square4);
    user.click(next);
    expect(square1).toHaveAttribute("data-alive", "true");
    expect(square5).toHaveAttribute("data-alive", "true");
  });
  it("can go back to previous generation", () => {
    let user = userEvent.setup();
    render(<GameOfLife />);
    let square1 = screen.getByTestId("square1");
    let square2 = screen.getByTestId("square2");
    let square3 = screen.getByTestId("square3");
    let square4 = screen.getByTestId("square4");
    let square5 = screen.getByTestId("square5");
    let nextBtn = screen.getByTestId("btn-next");
    let prevBtn = screen.getByTestId("btn-prev");
    user.click(square2);
    user.click(square3);
    user.click(square4);
    user.click(nextBtn);
    expect(square1).toHaveAttribute("data-alive", "true");
    expect(square5).toHaveAttribute("data-alive", "true");
    user.click(prevBtn);
    expect(square1).toHaveAttribute("data-alive", "false");
    expect(square5).toHaveAttribute("data-alive", "false");
  });
});
