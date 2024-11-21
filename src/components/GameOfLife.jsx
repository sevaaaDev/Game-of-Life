import { useEffect, useState } from "react";
import { getNextGen } from "../functions/getNextGen";
import styled from "styled-components";
import deepEqual from "deep-equal";
import { fillRandom } from "../functions/fillRandom";

const initGrid = Array(50).fill(Array(50).fill(0));

const row = 30;
const col = 50;
export function GameOfLife() {
  const [grid, setGrid] = useState([
    initGrid.map((el) => el.slice()),
    initGrid.map((el) => el.slice()),
  ]);
  const [run, setRun] = useState(false);
  const [intervalId, setId] = useState(null);
  const [second, setSecond] = useState(0);
  let currentGen = grid[0];
  function nextGen() {
    setGrid(([currentGen, prevGen]) => {
      let next = getNextGen(currentGen);
      if (deepEqual(next.flat(), currentGen.flat())) {
        return [currentGen, prevGen];
      }
      return [next, currentGen];
    });
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
    let firstI = Math.floor(index / col);
    let secondI = index % col;
    let newGrid = currentGen.slice();
    let state = 1;
    if (newGrid[firstI][secondI]) {
      state = 0;
    }
    newGrid[firstI][secondI] = state;
    setGrid([newGrid, grid[1]]);
  }

  function setRandom() {
    let newGrid = fillRandom(currentGen);
    setGrid([newGrid, currentGen]);
  }

  useEffect(() => {
    if (!run) {
      clearInterval(intervalId);
      return;
    }
    let id = setInterval(() => {
      nextGen();
    }, 200);
    setId(id);
    return () => {
      clearInterval(id);
    };
  }, [run]);
  return (
    <>
      <Grid $cols={currentGen[0].length}>
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
      <BtnContainer>
        <button
          disabled={!grid[1] && true}
          onClick={prevGen}
          data-testid="btn-prev"
          title="Previous"
        >
          <IconPrev />
        </button>
        <button onClick={() => setRun(!run)} title={!run ? "Run" : "Pause"}>
          {!run ? <IconRun /> : <IconPause />}
        </button>
        <button onClick={nextGen} data-testid="btn-next" title="Next">
          <IconNext />
        </button>
        <button onClick={reset} data-testid="btn-reset" title="Reset">
          <IconReset />
        </button>
        <button onClick={setRandom}>random</button>
      </BtnContainer>
    </>
  );
}

function IconPause() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconNext() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 -960 960 960"
    >
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56z" />
    </svg>
  );
}

function IconPrev() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 -960 960 960"
    >
      <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80z" />
    </svg>
  );
}

function IconReset() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-skip-backward"
      viewBox="0 0 16 16"
    >
      <path d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m7 1.133L1.696 8 7.5 11.367zm7.5 0L9.196 8 15 11.367z" />
    </svg>
  );
}

function IconRun() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-fast-forward"
      viewBox="0 0 16 16"
    >
      <path d="M6.804 8 1 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z" />
      <path d="M14.804 8 9 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z" />
    </svg>
  );
}

const Cell = styled.div`
  aspect-ratio: 1/1;
  background-color: ${(props) => (props.$alive ? "black" : "transparent")};
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  & button {
    border: none;
    background-color: white;
  }
  & button[disabled] {
    opacity: 0.2;
  }
`;

const Grid = styled.div`
  display: grid;
  border: 2px solid black;
  //border-radius: 1rem;
  grid-template-columns: repeat(${(props) => props.$cols}, 1fr);
  aspect-ratio: 1;
  width: 90%;
  max-width: 850px;
`;
