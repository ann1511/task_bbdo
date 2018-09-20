import { CHANGE_TEXT, INPUT_TEXT, SAVE_TEXT, CANSEL } from '../constants';

export const changeText = (id) => {
   return({
        type: CHANGE_TEXT,
        id
   })
}

export const inputText = (text) => {
    return({
         type: INPUT_TEXT,
         text
    })
 }

 export const saveText = () => {
    return({
         type: SAVE_TEXT,
    })
 }

 export const cansel = () => {
    return({
         type: CANSEL,
    })
 }