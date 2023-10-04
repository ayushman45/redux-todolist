import React from 'react'
import { useState,useRef,useEffect } from 'react'
import '../Redux'
import { addItem } from '../Redux'
import { useDispatch } from 'react-redux'

function AddComponent() {
    const dispatch=useDispatch()
    const [item,setItem] = useState('')
    const inputEle=useRef(null)

    useEffect(()=>{
        inputEle.current.focus()
    },[])

    const handleSubmit = (item)=>{
        var ele=document.querySelector("input")
        dispatch(addItem(item))
        ele.value=""
        inputEle.current.focus()
        const reset=()=>setItem('')
        reset()
    }
  return (
    <div id="add-container">
        <input type="text" placeholder="Enter a task" onChange={(e)=>setItem(e.target.value)} ref={inputEle}/>
        <button onClick={()=>handleSubmit(item)} id="addField">Add</button>
    </div>
  )
}

export default AddComponent
