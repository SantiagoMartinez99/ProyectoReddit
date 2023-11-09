import React from "react";
import {
  Input,
  InputLeftElement,
  InputGroup,
  Select,
  Image,
} from "@chakra-ui/react";
import GroupImage from "../../assets/images/programmingGroupLogo.png";

function GroupsMenu() {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" gap="1rem" paddingRight="5px">
        <Image
          height="15px"
          width="15px"
          borderRadius="10px"
          src={GroupImage}
          alt="r/programming"
        />
      </InputLeftElement>
      <Select placeholder="r/programming" textAlign='center'>

      </Select>
    </InputGroup>
  );
}

export default GroupsMenu;
