import PlusIcon from "../PlusIcon/PlusIcon"
import "./collectionitem.css"
import EllipsisIcon from "../EllipsisIcon/EllipsisIcon"
import TrashIcon from "../TrashIcon/TrashIcon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentSelectedCollection , addData } from "../../features/fileTree/fileTreeSlice";
import AngleRightIcon from "../AngleRightIcon/AngleRightIcon"


const CollectionItem = ({node,level}) => {

    let width = level*16;
    
    
    const {selectedCollection} = useSelector(state => state.fileTree);
    const dispatch = useDispatch()
    
    const selectHandler = () => {
        dispatch(changeCurrentSelectedCollection(node.id))
    }

    const addDataToCollection = () => {
      dispatch(changeCurrentSelectedCollection(node.id))
      dispatch(addData());
  }

    const style = {
        paddingLeft : `${width}px`
    }

    
  return (
    <div className={`collection-container ${(node.id === selectedCollection) && "selected"}`} style={style} onClick={selectHandler}   >
        <div className="angleright-icon-container">
        <AngleRightIcon/>
        </div>
        <p>{node.name}</p>
        <div className="collection-menu">
        <div onClick={addDataToCollection} className="plus-icon-container">
        <PlusIcon/>
        </div>
        <div className="trash-icon-container">
        <TrashIcon/>
        </div>
        <div className="ellipsis-icon-container">
        <EllipsisIcon/>
        </div>
        </div>
    </div>
  )
}

export default CollectionItem