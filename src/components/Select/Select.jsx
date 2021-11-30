import React from 'react'

export default function Select({top}) {
    const toptions = ['one', 'two', 'three']
    return (
        <div>
            <label>
                Top
                <select value={top} onChange={() => {}}>
                    {toptions.map((option) => {
                    return <option key={option}>{option}</option>;
                })}
                </select>
            </label>
        </div>
    )
}
