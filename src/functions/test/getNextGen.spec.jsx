import { describe, expect } from "vitest";
import { getNextGen } from "../getNextGen.jsx";

describe("getNextGen", () => {
  it("return the correct next generation", () => {
    let currentGen = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    let nextGen = [
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    let result = getNextGen(currentGen);
    expect(result).toEqual(nextGen);
  });
  it("return the correct next generation (edges)", () => {
    let currentGen = [
      [0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    let nextGen = [
      [0, 0, 1, 0, 1],
      [0, 0, 1, 1, 1],
      [0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    let result = getNextGen(currentGen);
    expect(result).toEqual(nextGen);
  });
});
