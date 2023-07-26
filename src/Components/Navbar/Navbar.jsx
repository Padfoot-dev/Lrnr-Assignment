import "./navbar.css"
import {  Outlet } from "react-router-dom"
import Hamburger from "../Hamburger/Hamburger"
import SearchInput from "../SearchInput/SearchInput"
import InviteMember from "../InviteMember/InviteMember"
import UserProfile from "../UserProfile/UserProfile"
import { NotificationIcon } from "../NotificationIcon/NotificationIcon"

const Navbar = () => {
  return (
    <div className="index-container">
      <div className="navbar-container">
          <div className="hamburger-container">
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
      <div className="main-container">
        <Outlet/>
      </div>
    </div>
  )
}

export default Navbar