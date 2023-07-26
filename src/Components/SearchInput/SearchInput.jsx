import SearchIcon from "../SearchIcon/SearchIcon"
import "./searchinput.css";

const SearchInput = () => {
  return (
    <div className="input-container">
        <div className="search-icon-container">
        <SearchIcon/>
        </div>
        <input className="search-input" type="text" />
    </div>
  )
}

export default SearchInput