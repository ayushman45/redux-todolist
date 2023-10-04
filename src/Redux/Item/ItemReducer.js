import { ADD_ITEM,REMOVE_ITEM } from "./ItemTypes";
const init={
        items:[{index:0,title:"First Item"},{index:1,title:"Hit Done to Delete the Task -->"}],
        ind_value:2
    }

export const reducer = (state=init,action)=>{
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                items:[...state.items,{index:state.ind_value,title:action.payload}],
                ind_value:state.ind_value+1
            }
        case REMOVE_ITEM:
            return{
                ...state,
                items:state.items.filter((itm)=>itm.index!==action.payload)
            }
        default:
            return state;
    }
}
