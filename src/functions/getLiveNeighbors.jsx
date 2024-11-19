export function getLiveNeighbors(grid, firstIndex, secondIndex) {
  let liveNeighbors = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (!i && !j) continue; // i AND j equals 0
      if (grid[firstIndex + i] === undefined) continue; // edges
      if (grid[firstIndex + i][secondIndex + j] === 1) {
        liveNeighbors++;
      }
    }
  }
  return liveNeighbors;
}
