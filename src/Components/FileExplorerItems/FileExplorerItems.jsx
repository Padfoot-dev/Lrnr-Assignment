import { useDispatch, useSelector } from "react-redux"
import CollectionItem from "../CollectionItem/CollectionItem";
import { useEffect } from "react";
import {renderList} from "../../features/fileTree/fileTreeSlice"
import DataItem from "../DataItem/DataItem";
const FileExplorerItems = () => {

  const {treeData,renderNodes } = useSelector(state => state.fileTree);
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(renderList())
  },[treeData])


    return (
    <div>
        {
          renderNodes.map(item => {
            if(item.node.type === "collection") {
              return <CollectionItem key={item.node.id} node={item.node} level={item.level} />
            }else if(item.node.type === "data") {
              return <DataItem key={item.node.id} node={item.node} level={item.level} />
            }
          })
        }
        
    </div>
  )
}

export default FileExplorerItems