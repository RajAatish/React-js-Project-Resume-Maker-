import React , {PureComponent}  from "react";

class PureComp extends PureComponent {
    constructor() 
    {
        super()
        this.state= {
            count: 1
        }
        // this.statea = {
        //     data: 1
        // }
        
    }
    // Dought
    // constructor(asc)
    // {
    //     super()
    //     this.state = {
    //         data: 0
    //     }
    // }
    render()
    {
       // console.warn("Component is called")
        return(
            <>
            <div className="mt-5 mb-5 center">
            <h2>Pure Component</h2>
            <p> Count : {this.state.count}</p>
            {/* <p> Data : {this.statea.data}</p> */}
            <button onClick={() => {this.setState({count: this.state.count})}}>Update Count</button>
            {/* <button onClick={() => {this.statea({data: this.statea.data+1})}}> Update Data</button> */}
            </div>
            <hr />
            </>
        )
    }
}
export default PureComp