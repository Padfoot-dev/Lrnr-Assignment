import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../SearchIcon/SearchIcon"
import "./searchinput.css";
import { searchTermOnchange } from "../../features/fileExplorer/fileExplorerSlice";

const SearchInput = () => {
  const dispatch = useDispatch()
  const {searchTerm} = useSelector(state => state.fileExplorer);

  const changleHandler = (e) => {
    dispatch(searchTermOnchange(e.target.value))
  }

  return (
    <div className="input-container">
        <div className="search-icon-container">
        <SearchIcon/>
        </div>
        <input onChange={(e)=> changleHandler(e)} className="search-input" type="text" value={searchTerm} maxLength={15} />
    </div>
  )
}

export default SearchInput