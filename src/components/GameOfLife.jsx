import { useState } from "react";
import { getNextGen } from "../functions/getNextGen";
import styled from "styled-components";
import deepEqual from "deep-equal";

const initGrid = Array(50).fill(Array(50).fill(0));

export function GameOfLife() {
  const [grid, setGrid] = useState([
    initGrid.map((el) => el.slice()),
    initGrid.map((el) => el.slice()),
  ]);
  let currentGen = grid[0];
  function nextGen() {
    let next = getNextGen(currentGen);
    if (deepEqual(next.flat(), currentGen.flat())) {
      return;
    }
    setGrid([next, currentGen]);
  }
  function prevGen() {
    setGrid([grid[1]]);
  }
  function reset() {
    setGrid([
      initGrid.map((el) => el.slice()),
      initGrid.map((el) => el.slice()),
    ]);
  }
  function setALive(index) {
    let firstI = Math.floor(index / currentGen.length);
    let secondI = index % currentGen.length;
    let newGrid = currentGen.slice();
    newGrid[firstI][secondI] = 1;
    setGrid([newGrid, grid[1]]);
  }
  return (
    <>
      <Grid>
        {currentGen.flat().map((el, i) => (
          <Cell
            key={i}
            data-testid="square"
            data-alive={el ? "true" : "false"}
            $alive={Number(el)}
            onClick={() => setALive(i)}
          />
        ))}
      </Grid>
      <button onClick={nextGen} data-testid="btn-next">
        next
      </button>
      <button
        disabled={!grid[1] && true}
        onClick={prevGen}
        data-testid="btn-prev"
      >
        previous
      </button>
      <button onClick={reset} data-testid="btn-reset">
        reset
      </button>
    </>
  );
}

const Cell = styled.div`
  background-color: ${(props) => (props.$alive ? "white" : "black")};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  & > div {
    aspect-ratio: 1;
  }
`;
