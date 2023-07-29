import TrashIcon from "../TrashIcon/TrashIcon";
import "./dataitem.css";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentSelectedData } from "../../features/fileTree/fileTreeSlice";

const DataItem = ({node , level}) => {

    console.log(node)
    let width = level*16;

        
    const {selectedData} = useSelector(state => state.fileTree);
    const dispatch = useDispatch()
    
    const selectHandler = () => {
        dispatch(changeCurrentSelectedData(node.id))
    }

    const deleteData = () => {

    }


    const style = {
        paddingLeft : `${width}px`
    }

  return (
    <div className={`data-item-container ${(node.id === selectedData) && "selected"}`} style={style} onClick={selectHandler} >
        <p className="data-item-text">{node.name}</p>
        <div onClick={deleteData} className="trash-icon-container">
        <TrashIcon />
        </div>
    </div>
  )
}

export default DataItem