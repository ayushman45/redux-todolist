import React from 'react'
import { useState,useRef,useEffect } from 'react'
import '../Redux'
import { addItem } from '../Redux'
import { useSelector, useDispatch } from 'react-redux'

function AddComponent() {
    const dispatch=useDispatch()
    const [item,setItem] = React.useState('')
    const inputEle=useRef(null)

    useEffect(()=>{
        inputEle.current.focus()
    },[])

    const handleSubmit = (item)=>{
        var ele=document.querySelector("#addField")
        ele.value=""
        dispatch(addItem(item))
    }
  return (
    <div id="add-container">
        <input type="text" placeholder="Enter a task" onChange={(e)=>setItem(e.target.value)} ref={inputEle}/>
        <button onClick={()=>handleSubmit(item)} id="addField">Add</button>
    </div>
  )
}

export default AddComponent
