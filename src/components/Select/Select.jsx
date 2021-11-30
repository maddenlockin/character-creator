import React from 'react'

export default function Select({top, middle, bottom}) {
    const tOptions = ['one', 'two', 'three']
    const midOptions = ['a', 'b', 'c']
    const botOptions = ['alpha', 'beta', 'delta']
    return (
        <div>
            <label>
                Top
                <select value={top} onChange={() => {}}>
                    {tOptions.map((option) => {
                    return <option key={option}>{option}</option>;
                })}
                </select>
            </label>
            <label>
                Middle
                <select value={middle} onChange={() => {}}>
                    {midOptions.map((option) => {
                    return <option key={option}>{option}</option>;
                })}
                </select>
            </label>
            <label>
                Bottom
                <select value={bottom} onChange={() => {}}>
                    {botOptions.map((option) => {
                    return <option key={option}>{option}</option>;
                })}
                </select>
            </label>
        </div>
    )
}
