import { Link } from "react-router-dom"
import EllipsisIcon from "../EllipsisIcon/EllipsisIcon"
import "./secondarynavbar.css"
const SecondaryNavbar = () => {
  return (
    <div className="secondary-navbar">
        <Link>All</Link>
        <Link>Board</Link>
        <Link>Graph</Link>
        <Link>Recent</Link>
        <div className="ellipsis-icon-container">
            <EllipsisIcon/>
        </div>
    </div>
  )
}

export default SecondaryNavbar