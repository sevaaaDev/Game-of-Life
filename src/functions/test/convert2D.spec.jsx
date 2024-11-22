import { describe, it, expect } from "vitest";
import { convertTo2D } from "../convert2D";

describe("convert 2d array", () => {
  it("return correct 2d", () => {
    let array = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(convertTo2D(array.flat(), 3)).toEqual(array);
  });
});
