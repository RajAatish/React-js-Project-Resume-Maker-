import React, { createRef } from "react";

class UseRef extends React.Component {
    constructor()
    {
        super()
        this.Inputref = createRef()
    }
    fun() {
        // console.log("Function is called")
        //  console.log(this.Inputref.current.value)
        this.Inputref.current.style.color= "red"
        this.Inputref.current.style.backgroundColor="black"
        
    }
    // componentDidMount(){
    //     console.log(this.Inputref.current.value= "1000")
    // }
    
    render() 
    {
        
        return(
            <>
            <div className="mt-5 mb-5 center">
            <h2> Use Ref In Class Component For Dom maniplutation</h2>
            
            <input type="text" ref={this.Inputref} />
            <button onClick={() => { this.fun()}} >Click</button>
            </div>
            <hr />
            </>
        )
    }
}
export default UseRef