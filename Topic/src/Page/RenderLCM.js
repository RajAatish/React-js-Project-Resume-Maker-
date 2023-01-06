import React from "react";

class RenderLCM extends React.Component {
    render()
    {
        // console.log("render")
        return(
            <>
            <div className="mt-5 mb-4 center">
                <h2>Render , Life Cycle Method</h2>
                <p>Name :- {this.props.name}</p>
            </div>
            
            </>
        )
    }
}
export default RenderLCM