import "./navbar.css"
import {  Outlet } from "react-router-dom"
import Hamburger from "../Hamburger/Hamburger"
import SearchInput from "../SearchInput/SearchInput"
import InviteMember from "../InviteMember/InviteMember"
import UserProfile from "../UserProfile/UserProfile"
import { NotificationIcon } from "../NotificationIcon/NotificationIcon"
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar"
import { useDispatch } from "react-redux"
import { toggleExplorer } from "../../features/fileExplorer/fileExplorerSlice"

const Navbar = () => {

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleExplorer())
  }

  return (
    <div className="index-container">
      <div className="navbar-container">
          <div onClick={toggle} className="hamburger-container">
            <Hamburger/>
          </div>
          <SearchInput/>
        <div className="right-nav">
          <InviteMember/>
          <div className="notification-icon-container">
            <NotificationIcon/>
          </div>
          <UserProfile/>
        </div>
        </div>
        <SecondaryNavbar/>
        <Outlet/>

    </div>
  )
}

export default Navbar