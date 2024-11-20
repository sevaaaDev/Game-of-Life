import { useState } from "react";
import "./App.css";
import { GameOfLife } from "./components/GameOfLife";

function App() {
  // grid state
  // [current gen, prev gen]
  // grid current gen = grid[0]
  return (
    <>
      <GameOfLife />
    </>
  );
}

// APP
// - grid state
// - button next gen onclick
// - button prev gen onclick
// - button reset onclick
// - button randomize onclick
//
// getNextGen(prev gen)
//
//

export default App;
