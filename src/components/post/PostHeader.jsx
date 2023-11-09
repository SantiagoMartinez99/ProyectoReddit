import { Icon } from "@chakra-ui/icons";
import React from "react";
import IconCloseLight from "../../assets/icons/iconCloseLight.svg";
import IconArrowUpLight from "../../assets/icons/iconUpArrowLight.png";
import IconArrowDownLight from "../../assets/icons/iconDownArrowLight.png";


function PostHeader() {
  return (
    <div className="PostHeader__container">
      <div className="postHeader__updown-votes">
        <img src={IconArrowUpLight}></img>
        <p>1.6k</p>
        <img src={IconArrowDownLight}></img>
      </div>
      <div className="postHeader__title">
      What AI won´t replace in your programming
      </div>
      <div className="postHeader__close">
        <img src={IconCloseLight}></img>
        <p>Close</p>
      </div>
    </div>
  );
}

export default PostHeader;
