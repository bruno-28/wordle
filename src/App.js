import Navbar from "./components/Navbar";
import Wordle from "./components/Wordle";
import SolutionContextProvider from "./contexts/SolutionContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SolutionContextProvider>
        <Wordle />
      </SolutionContextProvider>
    </div>
  );
}

export default App;
