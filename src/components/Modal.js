import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      <div>
        {isCorrect ? <h1>You won!</h1> : <h1>You lost!</h1>}
        <p>The word was:</p>
        <p className="solution">{solution}</p>
        {isCorrect && <p>You found the solution in {turn} guesses!</p>}
        <p>Play again?</p>
      </div>
    </div>
  );
}
