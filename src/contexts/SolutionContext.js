import { createContext, useEffect, useState } from "react";

export const SolutionContext = createContext();

const SolutionContextProvider = (props) => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?length=5")
      .then((res) => res.json())
      .then((json) => {
        setSolution(json[0]);
      });
  }, [setSolution]);

  return (
    <SolutionContext.Provider value={{ solution }}>
      {props.children}
    </SolutionContext.Provider>
  );
};

export default SolutionContextProvider;
