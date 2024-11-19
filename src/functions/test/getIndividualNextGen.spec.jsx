import { describe, expect } from "vitest";
import { getIndividualNextGen } from "../getIndividualNextGen.jsx";

describe("getIndividualNextGen", () => {
  it("return the next individual state when neighbors 2", () => {
    let result = getIndividualNextGen({ state: 1, neighbors: 2 });
    expect(result).toEqual(1);
  });
  it("return the next individual state when neighbors 3", () => {
    let result = getIndividualNextGen({ state: 0, neighbors: 3 });
    expect(result).toEqual(1);
  });
  it("return the next individual state when neighbors 1", () => {
    let result = getIndividualNextGen({ state: 1, neighbors: 1 });
    expect(result).toEqual(0);
  });
  it("return the next individual state when neighbors 4", () => {
    let result = getIndividualNextGen({ state: 1, neighbors: 4 });
    expect(result).toEqual(0);
  });
});
