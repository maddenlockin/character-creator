import React from 'react'

export default function Character({top, middle, bottom}) {
    return (
        <section style={{ display: "flex", flexDirection: "column" }}>
            <article
                className="top"
                style={{
                    backgroundImage: `url(./${top}-chick-head.png)`,
                    height: 200,
                    width: 200,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></article>
            <article
                className="middle"
                style={{
                    backgroundImage: `url(./${middle}-belly.png)`,
                    height: 150,
                    width: 150,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></article>
            <article
                className="bottom"
                style={{
                    backgroundImage: `url(./${bottom}-feet.png)`,
                    height: 150,
                    width: 150,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></article>
        </section>
    );
}
