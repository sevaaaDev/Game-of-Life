export function getIndividualNextGen({ state, neighbors }) {
  if (neighbors === 3) {
    return 1;
  }
  if (neighbors < 2) {
    return 0;
  }
  if (neighbors > 3) {
    return 0;
  }
  return state;
}
