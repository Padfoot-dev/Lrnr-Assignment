import { useSelector } from "react-redux"
import FileExplorer from "../Components/FileExplorer/FileExplorer"
import TexEditor from "../Components/TextEditor/TexEditor"
import "./homelayout.css"



const HomeLayout = () => {



  const {isFileExplorerOpen} = useSelector(state => state.fileExplorer);

  return (
    <div className="main-container">
      <FileExplorer/>
      <div id="editor" className={`text-editor ${isFileExplorerOpen && "push-editor-right"}`}>
        <TexEditor/>
      </div>
    </div>
  )
}

export default HomeLayout