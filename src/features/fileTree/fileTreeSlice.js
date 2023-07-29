import { createSlice } from "@reduxjs/toolkit";
import { makeCollectionObject , makeDataObject } from "../../scripts/TreeNode";
import { current } from '@reduxjs/toolkit'

const root = makeCollectionObject("root");

const findNodeWithId = (treeData ,id) => {
    let result = {}
    for(let level of Object.keys(treeData)) {
      for(let node of Object.keys(treeData[level])){
            if(id === node) {
                result = treeData[level][node];
                break;
            }
      }
    }
    return result
  }

export const findLevel = (root,node) => {

    let result = 0
    for(let level of Object.keys(root)) {
        for(let pointer of Object.keys(root[level])) {
            if(pointer === node.id ){
                result = level;
                break;
            }
        }
    }
    return result
}

const initialState = {
    treeData : {
        0 : {
            [root.id] : root
        }
    },
    selectedCollection:root.id,
    renderableNodes : [],
    selectedData :"",
    renderNodes : []
}

const fileExplorerSlice = createSlice({
    name : "fileTree",
    initialState : initialState,
    reducers : {

        addCollection : (state) => {
            const newNode =  makeCollectionObject("collection");
            const {treeData ,selectedCollection}  = current(state);
            const node = findNodeWithId(treeData,selectedCollection);
            const level = findLevel(treeData,node);
            newNode.parent = node.id;
            state.treeData[level][node.id].children.push(newNode.id)
            if(!state.treeData[parseInt(level)+1]){
                state.treeData[parseInt(level)+1] ={}
            }
            state.treeData[parseInt(level)+1][newNode.id] = newNode; 

        },
        changeCurrentSelectedCollection: (state,action) =>{

           if(state.selectedCollection === action.payload){
            state.selectedCollection = root.id;
           } else {
            state.selectedCollection = action.payload;
           }
        },
        addData : (state,action) => {
            const newNode =  makeDataObject("data");
            const {treeData ,selectedCollection}  = current(state);
            const node = findNodeWithId(treeData,selectedCollection);
            const level = findLevel(treeData,node);
            newNode.parent = node.id;
            state.treeData[level][node.id].children.push(newNode.id)
            if(!state.treeData[parseInt(level)+1]){
                state.treeData[parseInt(level)+1] ={}
            }
            state.treeData[parseInt(level)+1][newNode.id] = newNode; 
            
        },
        changeCurrentSelectedData: (state,action) =>{

            if(state.selectedData === action.payload){
             state.selectedData = "";
            } else {
             state.selectedData = action.payload;
            }
         },
         renderList : (state) => {
            const {treeData ,selectedCollection,renderNodes}  = current(state);
            const node = findNodeWithId(treeData,selectedCollection);
            let duplicte =false;
            const render = node.children.map(item => {
                for(let i = 0;i<renderNodes.length;i++){
                    if(item === renderNodes[i].node.id){
                        duplicte = true;
                    }
                }
                const currentNode = findNodeWithId(treeData,item) 
                const level = findLevel(treeData,currentNode)
                console.log({node : currentNode , level} , duplicte)
                if(!duplicte) state.renderNodes.push({node : currentNode , level})
                duplicte = false;
                return {node : currentNode , level}
            })
         }
        //  deleteNode : (state,action) =>{
        //     if(state.selectedCollection === action.payload){
        //         state.selectedCollection = root.id;
        //         state.root = deleteNodeById(state.root,action.payload)
        //     }else if(state.selectedData === action.payload){
        //         state.selectedData = "";
        //         state.root = deleteNodeById(state.root,action.payload)
        //     } else {
        //         state.root = deleteNodeById(state.root,action.payload)
        //     }
        //  }
    }
}) 

const {actions} = fileExplorerSlice;

export const {addCollection , changeCurrentSelectedCollection ,addData,changeCurrentSelectedData ,action,renderList} = actions;
export const {reducer} = fileExplorerSlice;
