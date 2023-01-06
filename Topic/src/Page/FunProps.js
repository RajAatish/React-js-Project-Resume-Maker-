import React from "react";

const FunProps = (p) => {
    return(
        <>
        <div className="mt-5 center">
            <h2>Function Props</h2>
            <p>Name: {p.name}</p>
            <p>Like: {p.l}</p>
            <button onClick={p.fun}>Like</button>
        </div>
        <br/>
        <hr/>
        </>
    )
}
export default FunProps