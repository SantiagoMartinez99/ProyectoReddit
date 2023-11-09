import React from "react";
import redditFace from "../../assets/icons/redditFace.svg";
import redditText from "../../assets/icons/redditText.svg";
import SearchInput from "./SearchInput";
import GroupsMenu from "./GroupsMenu";
import UserDropDown from "./UserDropDown";
import NotificationBar from "./NotificationBar";

function Navbar() {
  return (
    <flex>
      <div className="navbar__container">
        <div className="navbar__logo-section">
        <img className="navbar__reddit-logo-face" src={redditFace}></img>
        <img className="navbar__reddit-logo-text" src={redditText}></img>
        </div>
        <GroupsMenu/>
        <SearchInput />
        <NotificationBar/>
        <UserDropDown/>
      </div>
    </flex>
  );
}

export default Navbar;
