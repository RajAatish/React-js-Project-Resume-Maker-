import React , {useEffect , useState} from "react";

const UseEffecHook = () => {

    //  Use State Hook
    const [count , setCount] = useState(76)
    const [data , setData] = useState(420)

    // Use Effect Hook
    useEffect( () => {
        setCount(count+5)
        // console.log("useEffect")
        // alert("Use State Data" + data)
    } , [data])
    
    return(
        <>
            <div className="mt-5 mb-3 center">
                <h2> Use Effect Hook</h2>
                <p> Count :- {count}</p>
                <p> Data :- {data}</p>

                <button onClick={() => {setCount(count+1)}} >Update Count</button>
                <button onClick={() => {setData(data+1)}} > Update Data</button>
            </div>
        </>
    )
}
export default UseEffecHook;