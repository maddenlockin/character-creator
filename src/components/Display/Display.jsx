import React from 'react'

export default function Display({
    judgement,
    judgementArr,
    // topCount,
    // middleCount,
    // bottomCount
}) {
    return (
        <ul>
            {/* <li> {judgementArr}  </li> */}
            {judgementArr.map((judgement) =>  (
                <p>{judgement}</p>
            ))}
            <li key={judgement} aria-label='list items'>'{judgement}'</li>
        </ul>
    )
}
