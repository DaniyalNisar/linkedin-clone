import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/949/141/non_2x/programming-code-coding-or-hacker-background-vector.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayname}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">9,999</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">9,999</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("javascript")}
        {recentItem("programming")}
        {recentItem("web")}
        {recentItem("software")}
        {recentItem("coding")}
      </div>
    </div>
  );
}

export default Sidebar;
