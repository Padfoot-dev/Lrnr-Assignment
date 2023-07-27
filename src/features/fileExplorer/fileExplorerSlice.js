import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTerm : "",
    isFileExplorerOpen : false
}

const fileExplorerSlice = createSlice({
    name : "fileExplorer",
    initialState : initialState,
    reducers : {
        toggleExplorer : (state) => {
            state.isFileExplorerOpen = !state.isFileExplorerOpen;
        },
        searchTermOnchange : (state ,action) => {
            state.searchTerm = action.payload;
        }
    }
})

const {actions} = fileExplorerSlice;

export const {toggleExplorer , searchTermOnchange} = actions;
export const {reducer} = fileExplorerSlice;
