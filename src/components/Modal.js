import React, { useState } from "react";

export default function Modal({ isCorrect, turn, solution }) {
  const [isModalClosed, setIsModalClosed] = useState(false);

  const handleClick = () => {
    setIsModalClosed(true);
  };

  return (
    <div>
      {!isModalClosed && (
        <div className="modal">
          <div>
            <button className="close-modal" onClick={handleClick}>
              X
            </button>
            {isCorrect ? <h1>You won!</h1> : <h1>You lost!</h1>}
            <p>The word was:</p>
            <p className="solution">{solution}</p>
            {isCorrect && <p>You found the solution in {turn} guesses!</p>}
            <p>Play again?</p>
          </div>
        </div>
      )}
    </div>
  );
}
