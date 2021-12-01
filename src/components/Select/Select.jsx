import React from 'react'

export default function Select({top, middle, bottom, setTop, setMiddle, setBottom}) {
    const tOptions = ['tophat', 'crown', 'church', 'bunny-ear']
    const midOptions = ['chillin', 'furry', 'squish', 'wrinkles']
    const botOptions = ['cat', 'green-dragon', 'pizza', 'pink-dragon']
    return (
        <div className='select'>
            <label>
                Top
                <select value={top} onChange={(e) => setTop(e.target.value)}>
                    {tOptions.map((option) => {
                    return <option key={option}>{option}</option>;
                })}
                </select>
            </label>

            <label>
                Middle
                <select value={middle} onChange={(e) => setMiddle(e.target.value)}>
                    {midOptions.map((option) => {
                    return <option key={option}>{option}</option>;
                })}
                </select>
            </label>
            
            <label>
                Bottom
                <select value={bottom} onChange={(e) => setBottom(e.target.value)}>
                    {botOptions.map((option) => {
                    return <option key={option}>{option}</option>;
                })}
                </select>
            </label>
        </div>
    )
}
