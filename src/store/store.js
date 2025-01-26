import { create } from "zustand";

export const useBoardsStore = create(set=>({
    boardsList:[],
    addNewBoard:(nameBoard)=>set(state=>({boardsList:[...state.boardsList, nameBoard]}))

}))