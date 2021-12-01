import './App.css';
import { useState } from "react";
import Character from "./components/Character/Character";
import Select from "./components/Select/Select";
import Display from './components/Display/Display';

function App() {
  // useState calls, [] destructuring an array
  const [top, setTop] = useState("church");
  const [middle, setMiddle] = useState("wrinkles");
  const [bottom, setBottom] = useState("cat");
  const [input, setInput] = useState("");
  const [topCount, setTopCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [judgements, setJudgements] = useState(0);
  const [newJudgement, setNewJudgement] = useState(0);

  const handleClick = () => {
    setJudgements((prevState) => {
      return [...prevState, newJudgement];
    });
  };

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
        topCount={topCount}
        setTopCount={setTopCount}
        middleCount={middleCount}
        setMiddleCount={setMiddleCount}
        bottomCount={bottomCount}
        setBottomCount={setBottomCount}
        newJudgement={newJudgement}
        setNewJudgement={setNewJudgement}
        judgements={judgements}
        setJudgements={setJudgements}
        handleClick={handleClick}
      />
      <Display 
        judgements={judgements}
        topCount={topCount}
        middleCount={middleCount}
        bottomCount={bottomCount}
      />
      <Character top={top} middle={middle} bottom={bottom} />
    </div>
  );
}

export default App;
