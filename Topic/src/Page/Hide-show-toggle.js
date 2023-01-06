import React , { useState} from "react";


const HideShowToggle = () => {
// Hide Show And Toggle
const [hide , setHide] = useState(true)
const [hide2 , setHide2] = useState(true)

return(
<>

<div className="center mt-5 mb-5">

{ hide ? <h1> Hide show Troggle</h1>: <h2> Item is hide</h2> }

{ hide2 ? <h2>Toggle</h2> : <h2>Toggle Hide</h2> }
{/* Button */}
<br/>
<button onClick={() => {setHide(false)}} >Hide </button>
<button onClick={() => {setHide(true)}}> Show</button>
<button onClick={() => {setHide2(!hide2)}} > Toggle</button>
</div>
<hr/>
</>
)}
export default HideShowToggle