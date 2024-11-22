import { useState, useEffect } from "react";
import { getNextGen } from "../functions/getNextGen";
import { fillRandom } from "../functions/fillRandom";
import deepEqual from "deep-equal";
import { convertTo2D } from "../functions/convert2D";
export function useGameOfLife(initGrid) {
  const [grid, setGrid] = useState([
    initGrid.map((el) => el.slice()),
    initGrid.map((el) => el.slice()),
  ]);
  const [isRun, setRun] = useState(false);
  const [intervalId, setId] = useState(null);
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
    setGrid([grid[1], grid[1]]);
  }
  function reset() {
    setGrid([
      initGrid.map((el) => el.slice()),
      initGrid.map((el) => el.slice()),
    ]);
  }
  function toggleCell(index) {
    let newGrid = currentGen.flat();
    let state = 1;
    if (newGrid[index]) {
      state = 0;
    }
    newGrid[index] = state;
    setGrid([convertTo2D(newGrid, grid[0].length), grid[1]]);
  }

  function randomize() {
    let newGrid = fillRandom(currentGen);
    setGrid([newGrid, currentGen]);
  }

  function run() {
    setRun(!isRun);
  }

  useEffect(() => {
    if (!isRun) {
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
  }, [isRun]);
  return {
    currentGen,
    nextGen,
    isRun,
    run,
    toggleCell,
    randomize,
    prevGen,
    reset,
  };
}
