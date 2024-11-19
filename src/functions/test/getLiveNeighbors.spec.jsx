import { describe, expect } from "vitest";
import { getLiveNeighbors } from "../getLiveNeighbors.jsx";

describe("getLiveNeighbors", () => {
  it("return the correct alive neighbors", () => {
    let currentGen = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    let result = getLiveNeighbors(currentGen, 0, 2);
    expect(result).toEqual(3);
  });
  it("return the correct alive neighbors on edges", () => {
    let currentGen = [
      [0, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    let result = getLiveNeighbors(currentGen, 0, 0);
    expect(result).toEqual(3);
  });
  it("return the correct alive neighbors on edges", () => {
    let currentGen = [
      [0, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1],
    ];
    let result = getLiveNeighbors(currentGen, 4, 4);
    expect(result).toEqual(0);
  });
});
