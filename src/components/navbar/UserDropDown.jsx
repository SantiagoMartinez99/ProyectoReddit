import React from "react";
import ProfileImage from "../../assets/images/redditUser2.png";
import RedditStar from "../../assets/images/redditStar.png";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { InputLeftAddon } from "@chakra-ui/react";

function UserDropDown() {
  return (
    <Menu fullWidth>
      <MenuButton 
        as={Button}
        rightIcon={<ChevronDownIcon />}
        width={"100%"}
        height={"40px"}
        display="inline-flex"
        justifyContent="start"
        margin="0"
      >
        <div className="userDropDown__profile-container">
        <Avatar
          name="Wonderful-External22"
          src={ProfileImage}
          marginLeft="10px"
          height="38px"
          width="38px"
        //   transform="translateX()"
        >
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>

        <div className="userDropDown__profile-info">
          <span> Wonderful-External22</span>
          <span>
            <img
              className="userDropDown__profile-karma-img"
              src={RedditStar}
            ></img>
            <p>613 Karma</p>
          </span>
        </div>
        </div>
      </MenuButton>

      <MenuList fullWidth>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserDropDown;
