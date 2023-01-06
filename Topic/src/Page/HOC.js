import React, { useState } from "react";
import { Container } from "react-bootstrap";

const HOC = () => {
    return(
        <>
        <div className="mt-5 mb-5 center">
           <h2> High Order Component (HOC)</h2>
           <Container className="center" >
           <HOC3 data={HOC2} />
           <HOC4 data={HOC2} />
           <HOC5 data={HOC2} />
           </Container>
           
        </div>
        <hr />
        </>
    )
}

function HOC2 () {
    const [count , setCount] = useState(0)
    return(
        <>
        <p> Count {count}</p>
        <button onClick={() => {setCount(count+1)}}> Update Counter</button>
        </>
    )
}

function HOC3(props) {
    return(
        <>
         <h3 style={{backgroundColor:"red" , width: 300}}>Red <props.data/></h3>
        </>
    )
}
function HOC4(props) {
    return(
        <>
         <h3 style={{backgroundColor: "green" , width: 300}}> Green <props.data /></h3>
        </>
    )
}
function HOC5(props) {
    return(
        <>
         <h3 style={{backgroundColor: "blue" , width: 300}}> Blue <props.data /></h3>
        </>
    )
}
export default HOC