import React from "react";
import IconAdd from "../../assets/icons/iconAdd.png"
import IconBell from "../../assets/icons/iconBell.png";
import IconMessages from "../../assets/icons/iconMessages.png";
import IconPopularity from "../../assets/icons/iconPopularity.png";
import IconMegaphone from "../../assets/icons/iconMegaphone.png";

function NotificationBar() {
  return (
    <div>
      <div className="notificationBar__icon-container">
        <button className="notificationBar__icon">
          <img src={IconPopularity}></img>
        </button>
        <button className="notificationBar__icon">
          <img src={IconMessages}></img>
        </button>
        <button className="notificationBar__icon">
          <img src={IconBell}></img>
        </button>
        <button className="notificationBar__icon">
          <img src={IconAdd}></img>
        </button>
        <span className="notificationBar__advertise-span">
          <img src={IconMegaphone}></img>
          Advertise
        </span>
      </div>
    </div>
  );
}

export default NotificationBar;
