import { ADD_FAV,REMOVE_FAV } from "./tipy_acciones.js";

export function addFav(character){
    return {
        type: ADD_FAV,
        payload: character,
    }
}
export function removeFav(id){
    return{
        type: REMOVE_FAV,
        payload : id,
    }
}
