import AngleBackIcon from "../AngleBackIcon/AngleBackIcon"
import ExpandIcon from "../ExpandIcon/ExpandIcon"
import PlusIcon from "../PlusIcon/PlusIcon"
import "./fileexplorer.css";
import { toggleExplorer } from "../../features/fileExplorer/fileExplorerSlice";
import { useDispatch, useSelector } from "react-redux";

const FileExplorer = () => {

    const dispatch = useDispatch();
    const {isFileExplorerOpen,searchTerm} = useSelector(state=> state.fileExplorer)

    const toggle = () => {
        dispatch(toggleExplorer());
    }

  return (
    <div className={`file-explorer-container ${isFileExplorerOpen && "file-explorer-active"}`}>
        <div className="file-explorer-nav">
            <p>{searchTerm}</p>
            <div className="file-explorer-menu ">
                <div className="fileexplorer-icon-container">
                    <PlusIcon/>
                </div>
                <div className="fileexplorer-icon-container">
                    <ExpandIcon/>
                </div>
               <div onClick={toggle} className="fileexplorer-icon-container">
                    <AngleBackIcon/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default FileExplorer