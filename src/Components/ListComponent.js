import React from 'react'
import {removeItem} from '../Redux'
import { useSelector, useDispatch } from 'react-redux'



function ListComponent() {
    const dispatch=useDispatch()
    const itm=useSelector(state=>state.item.items)
  return (
    <div id="itm-container">
      {
        itm.map((item)=>{
          return(
            <div key={item.index} id="single-itm">
              <p id="itm">{item.title}</p>
              <button onClick={()=>dispatch(removeItem(item.index))} id="rem-btn">Done</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListComponent
