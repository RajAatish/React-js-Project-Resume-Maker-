import React from "react";

const MapWithProps2 = (props) => {
    return(
        <>
        <div className="mt-4 center ">
            <span className="MapWithProps2"> Name : {props.data2.name}</span>
            <span className="MapWithProps2"> Email : {props.data2.email}</span>
        </div>
        </>
    )
}
export default MapWithProps2