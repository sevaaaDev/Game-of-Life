import { getIndividualNextGen } from "./getIndividualNextGen";
import { getLiveNeighbors } from "./getLiveNeighbors";

export function getNextGen(prevGen) {
  let nextGen = prevGen.map((el) => el.slice()); // copy all array inside it
  for (let i = 0; i < prevGen.length; i++) {
    for (let j = 0; j < prevGen[i].length; j++) {
      let prevState = prevGen[i][j];
      let neighbors = getLiveNeighbors(prevGen, i, j);
      let nextState = getIndividualNextGen({ state: prevState, neighbors });
      nextGen[i][j] = nextState;
    }
  }
  return nextGen;
}
