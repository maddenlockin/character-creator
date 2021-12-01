import './App.css';
import { useState } from "react";
import Character from "./components/Character/Character";
import Select from "./components/Select/Select";

function App() {
  // useState calls, [] destructuring an array
  const [top, setTop] = useState("");
  const [middle, setMiddle] = useState("");
  const [bottom, setBottom] = useState("");
  const [input, setInput] = useState("");
  const [catchphrases, setCatchphrases] = useState([]);
  const [topCount, setTopCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  
  return (
    <div className="App">
      {/* state variables passed as props to presentational components */}
      <Select
        top={top}
        setTop={setTop}
        middle={middle}
        setMiddle={setMiddle}
        bottom={bottom}
        setBottom={setBottom}
        input={input}
        setInput={setInput}
        catchphrases={catchphrases}
        setCatchphrases={setCatchphrases}
        topCount={topCount}
        setTopCount={setTopCount}
        middleCount={middleCount}
        setMiddleCount={setMiddleCount}
        bottomCount={bottomCount}
        setBottomCount={setBottomCount}
      />
      <Character top={top} middle={middle} bottom={bottom} />
    </div>
  );
}

export default App;
