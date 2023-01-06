import React from "react";

const Props = (p) => {
    return(
        <>
            <div className="mt-5 mb-3 center">
                <h3>Props</h3>
                <p>Name : {p.name} </p>
                <p>Brnach : {p.branch}</p>
                <p>Year: {p.year}</p>
            </div>
            <hr/>
        </>
    )
} 
export default Props