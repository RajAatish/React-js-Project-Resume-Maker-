import React from "react";

class CompDidMount extends React.Component 
{
    constructor()
    { 
        super()
        // console.log("constructor")
        this.state={
            name: "aatish"
        }
    }
    componentDidMount()
    {
        // console.log("Component Did Mount")
    }
    render()
    {
        // console.log("render")
        return(
            <>
            <div className="center mt-5 mb-3">
                <h2>Component Did Mount</h2>
                <p>Name:- {this.state.name}</p>
                <button onClick={() => {this.setState({name:"raj"})}}>Update</button>
            </div>
            <hr/>
            </>
        )
    }
}
export default CompDidMount