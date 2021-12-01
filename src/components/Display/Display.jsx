import React from 'react'

export default function Display(
    judgements,
    // topCount,
    // middleCount,
    // bottomCount
) {
    return (
        <div>
            {judgements.map((judgement) =>  (
                <p>judgement</p>
            ))}
        </div>
    )
}
