export function convertTo2D(grid, col) {
  let newGrid = [];
  let base = 0;
  for (let i = 0; i <= grid.length; i++) {
    if (i % col === 0 && i !== 0) {
      newGrid.push(grid.slice(base, i));
      base = i;
    }
  }
  return newGrid;
}
