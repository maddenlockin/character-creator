import React from 'react'
import { useState } from "react"
import Select from '../../components/Select/Select';

export default function Home() {
// useState calls, [] destructuring an array
    const [top, setTop] = useState("two");
    const [middle, setMiddle] = useState("b");
    const [bottom, setBottom] = useState("beta");
    const [input, setInput] = useState("");
    const [catchphrases, setCatchphrases] = useState([]);
    const [topCount, setTopCount] = useState(0);
    const [middleCount, setMiddleCount] = useState(0);
    const [bottomCount, setBottomCount] = useState(0);


    return (
        <div>
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
        </div>
    );
}
