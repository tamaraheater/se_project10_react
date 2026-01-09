import "./Sidebar.css";
import avatarDefault from "../../assets/avatar.svg";

export default function Sidebar() {
  const username = "Terrance Tegegne";
  const avatar = avatarDefault;

  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <div className="sidebar__user-name">{username}</div>
          {avatar ? (
            <img
              className="sidebar__avatar"
              src={avatar || avatarDefault}
              alt="user avatar"/>
        ) : (
          <span className="sidebar__avatar sidebar__avatar_none">
            {username?.toUpperCase().char(0) || ""}
          </span>)}
        </div> 
    </aside>
    );
  }

