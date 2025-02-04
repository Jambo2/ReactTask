import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBoardsStore = create(
persist(
    set=>({
    boardsList:[],
    addNewBoard:(nameBoard)=>set(state=>({boardsList:[...state.boardsList, nameBoard]})),
    listOfLists:[],
    addNewList:(nameList)=>set(state=>({listOfLists:[...state.listOfLists, nameList]}))
   
    })),
    {
        name:'boards',
    }
)