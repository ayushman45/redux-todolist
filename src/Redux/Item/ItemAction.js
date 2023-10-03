import { ADD_ITEM } from './ItemTypes';
import { REMOVE_ITEM } from './ItemTypes';

export const addItem = (item) => {
  console.log(item,"adding started")
  return {
    type: ADD_ITEM,
    payload: item
  }
}

export const removeItem = (index) => {
  console.log(index,"removing started")
  return {
    type: REMOVE_ITEM,
    payload: index
  }
}