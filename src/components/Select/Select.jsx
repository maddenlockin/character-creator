import React from 'react'

export default function Select({
    top, 
    middle, 
    bottom, 
    setTop, 
    setMiddle, 
    setBottom, 
    judgement, 
    setJudgement, 
    handleClick,
    setTopCount,
    topCount,
    setMiddleCount,
    middleCount,
    setBottomCount,
    bottomCount
}) {
    const tOptions = ['tophat', 'crown', 'church', 'bunny-ear']
    const midOptions = ['chillin', 'furry', 'squish', 'wrinkles']
    const botOptions = ['cat', 'green-dragon', 'pizza', 'pink-dragon']


    const handleTopChange = (e) => {
        e.preventDefault();
        setTop(e.target.value);
        setTopCount(topCount + 1);
    };

    const handleMiddleChange = (e) => {
        e.preventDefault();
        setMiddle(e.target.value);
        setMiddleCount(middleCount + 1);
    };

    const handleBottomChange = (e) => {
        e.preventDefault();
        setBottom(e.target.value);
        setBottomCount(bottomCount + 1);
    };
    return (
        <section className='select'>
            <label>
                Top
                <select 
                    value={top} 
                    onChange={handleTopChange}>
                    {tOptions.map((option) => {
                    return <option key={option}>{option}</option>;
                })}
                </select>
            </label>

            <label>
                Middle
                <select 
                    value={middle} 
                    onChange={handleMiddleChange}>
                    {midOptions.map((option) => {
                    return <option key={option}>{option}</option>;
                })}
                </select>
            </label>

            <label>
                Bottom
                <select 
                    value={bottom} 
                    onChange={handleBottomChange}>
                    {botOptions.map((option) => {
                    return <option key={option}>{option}</option>;
                })}
                </select>
            </label>

            <label>
                Judgements
                <input
                    aria-label='judgement input'
                    type='text'
                    value={judgement}
                    onChange={(e) => setJudgement(e.target.value)}
                />
            </label>

            <button type='button' onClick={handleClick}>
                Judge
            </button>

            <div>
                <label></label>
            </div>
        </section>
    )
}
