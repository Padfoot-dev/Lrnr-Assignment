import { configureStore } from "@reduxjs/toolkit";
import {reducer as fileExplorerReducer} from "../features/fileExplorer/fileExplorerSlice"

const store = configureStore({
    reducer : {
        fileExplorer : fileExplorerReducer 
    }
})

export default store;