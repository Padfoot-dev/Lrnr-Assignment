import "./invitemember.css";
import UserPlusIcon from "../UserPlusIcon/UserPlusIcon";

const InviteMember = () => {
  return (
    <div className="invite-member-container">
        <div className="userplus-icon-container">
            <UserPlusIcon/>
        </div>
        <p className="invite-member-text">INVITE TEAM MEMBER</p>
    </div>
  )
}

export default InviteMember