import React from 'react'

export default function Display({
    judgement,
    judgementArr,
    topCount,
    middleCount,
    bottomCount
}) {
    return (
        <>
            <ul>
                <li key={judgement} aria-label='list items'>
                    '{judgement}'
                </li>
                {/* <li> {judgementArr}  </li> */}
                {judgementArr.map((judgement) =>  (
                    <p>{judgement}</p>
                ))}
            </ul>
            <p>
                The top of your character has been changed {topCount} times, the middle {middleCount} times, and the bottom {bottomCount} times.
            </p>
        </>
    )
}
