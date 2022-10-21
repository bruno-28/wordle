import React, { useContext, useEffect, useState } from "react";
import { SolutionContext } from "../contexts/SolutionContext";
import useWorlde from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function Wordle() {
  const { solution } = useContext(SolutionContext);
  
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWorlde(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect || turn > 5) {
      window.removeEventListener("keyup", handleKeyup);
      setTimeout(() => setShowModal(true), 1500);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <div>
      <div className="game-board">
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <Keypad usedKeys={usedKeys} />
      </div>
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
}
