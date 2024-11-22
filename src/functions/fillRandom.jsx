import { convertTo2D } from "./convert2D";
export function fillRandom(grid) {
  grid = grid.flat().map(() => {
    return Math.round(Math.random());
  });
  return convertTo2D(grid, 50);
}
