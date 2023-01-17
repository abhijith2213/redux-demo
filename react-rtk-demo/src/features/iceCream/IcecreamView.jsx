import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { ordered,restocked } from "./icecreamSlice";
export const  IcecreamView=()=> {
    const [value, setValue] = useState(1)
    const numOfIcecreams = useSelector((state)=>state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of icecreams - {numOfIcecreams}</h2>
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>   
            <button style={{display:''}} onClick={()=>dispatch(ordered())}>Order icecream</button>
            <input type='number' value={value} onChange={(e)=> setValue(parseInt(e.target.value||0))}></input>
            <button onClick={()=>dispatch(restocked(value))}>Restock icecream</button>
            </div>
        </div>
       )
}
