import React from "react";
import {
  Input,
  InputLeftElement,
  InputGroup,
  Tag,
  Image,
  Select,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import GroupImage from "../../assets/images/programmingGroupLogo.png";
import IconClose from "../../assets/icons/iconClose.svg";

function PostCommunity() {
  return (
    <div className="postCommunity__container">
      <div className="postCommunity__filters">
        <InputGroup padding="0 15px 0 0">
          <InputLeftElement
            pointerEvents="none"
            gap="1rem"
            paddingRight="5px"
          ></InputLeftElement>
          <Select placeholder="Sort By: Old"></Select>
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none" gap="1rem">
            <SearchIcon color="gray.400" />
          </InputLeftElement>
          <Input type="text" placeholder="Search Reddit" />
        </InputGroup>
      </div>
      <p className="postCommunity__other-discussions">
        View discusisions in 1 other community{" "}
      </p>
    </div>
  );
}

export default PostCommunity;
