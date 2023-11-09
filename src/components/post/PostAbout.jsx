import React from "react";
import GroupLogo from "../../assets/images/programmingGroupLogo.png";
import IconCake from "../../assets/icons/iconCake.png";

function PostAbout() {
  return (
    <div className="postAbout__container">
      <span className="postAbout__header"></span>
      <div className="postAbout__community-group-info">
        <div className="postAbout__community-header-info">
          <img src={GroupLogo}></img>
          <p>r/programming</p>
        </div>
        <p>Computer programming</p>
        <span className="postAbout__community-birthday">
          <img src={IconCake}></img>
          <p>Created Feb 28, 2006</p>
        </span>
        <div className="postAbout__community-data-container">
          <div className="postAbout__community-data">
            <p>5.7m</p>
            <p>Members</p>
          </div>
          <div className="postAbout__community-data">
            <div  className="postAbout__community-people-connected">
            <div class="connected__circle"></div>
            <p>2.3k</p>
            </div>
            <p>Online</p>
          </div>
          <div className="postAbout__community-data">
            <p>Top 1%</p>
            <p>Ranked by Size</p>
          </div>
        </div>
        <div className="postAbout__community-buttons">
            <button>Join</button>
            <button>Create Post</button>
        </div>
      </div>
    </div>
  );
}

export default PostAbout;
