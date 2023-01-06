import React from "react";

class ConstructorLCM extends React.Component{

    constructor()
    {
        super();
        this.state={
            name:"aatish"
        }
    }
    render()
    {
        return(
            <>
            <div className="mt-5 mb-3 center">
                <h2>Constructor Life Cycle Method</h2>
                <p>Name :- {this.state.name}</p>
            </div>
            <hr/>
            </>
        )
    }    
}
export default ConstructorLCM