import React from "react";

export default function Keypad({ usedKeys }) {
  const keypadLetters = [
    { key: "q" },
    { key: "w" },
    { key: "e" },
    { key: "r" },
    { key: "t" },
    { key: "y" },
    { key: "u" },
    { key: "i" },
    { key: "o" },
    { key: "p" },
    { key: "a" },
    { key: "s" },
    { key: "d" },
    { key: "f" },
    { key: "g" },
    { key: "h" },
    { key: "j" },
    { key: "k" },
    { key: "l" },
    { key: "z" },
    { key: "backspace" },
    { key: "x" },
    { key: "c" },
    { key: "v" },
    { key: "b" },
    { key: "n" },
    { key: "m" },
    { key: "enter" },
  ];

  return (
    <div className="keypad">
      {keypadLetters &&
        keypadLetters.map((letter) => {
          if (letter.key === "backspace" || letter.key === "enter") {
            return (
              <div key={letter.key} className="special-char">
                {letter.key}
              </div>
            );
          } else {
            const color = usedKeys[letter.key];
            return (
              <div key={letter.key} className={color}>
                {letter.key}
              </div>
            );
          }
        })}
    </div>
  );
}
