import React from "react";
import "./HeaderOption.css";
import Avatar from "@mui/material/Avatar";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
function HeaderOption({ Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon ? (
        <Icon className="headerOption_icon" />
      ) : (
        <Avatar className="headerOption_icon" src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;