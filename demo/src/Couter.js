import React, { useState } from "react"
function Counter()
{
    const[Data,setData]=useState(0);
    function updateData()
    {
        setData(Data+1)
    }
    console.log(Data)
    return(
        <div>
        <h1>counter</h1>
            <h1>{Data}</h1>
            <button onClick={updateData}>click</button>
        </div>
    )
}
export default Counter