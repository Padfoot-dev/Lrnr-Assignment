import { configureStore } from "@reduxjs/toolkit";
import {reducer as fileExplorerReducer} from "../features/fileExplorer/fileExplorerSlice";
import {reducer as fileTreeReducer} from "../features/fileTree/fileTreeSlice"

const store = configureStore({
    reducer : {
        fileExplorer : fileExplorerReducer ,
        fileTree : fileTreeReducer
    }
})

export default store;