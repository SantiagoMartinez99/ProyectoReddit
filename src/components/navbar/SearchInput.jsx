import React from "react";
import {
  Input,
  InputLeftElement,
  InputGroup,
  Tag,
  Image,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import GroupImage from "../../assets/images/programmingGroupLogo.png";
import IconClose from "../../assets/icons/iconClose.svg";

function SearchInput() {
  return (
    <flex>
      <InputGroup >
        <InputLeftElement pointerEvents="none" gap="1rem">
          <SearchIcon  color="gray.400" marginLeft="11rem" />
          <Tag
            paddingLeft="1px"
            minWidth="10rem"
            gap={"5px"}
            backgroundColor="#c7c7c7d0"
            alignItems="center"
            fontWeight="450"
          >
            <Image
              marginLeft="10px"
              height="15px"
              width="15px"
              borderRadius="10px"
              src={GroupImage}
              alt="r/programming"
            />
            r/programming
            <button>
              <Image
                marginLeft="5px"
                height="15px"
                width="15px"
                borderRadius="10px"
                src={IconClose}
                alt="r/programming"
              />
            </button>
          </Tag>
        </InputLeftElement>
        <Input type="text" placeholder="Search Reddit" paddingLeft="14rem" />
      </InputGroup>
    </flex>
  );
}

export default SearchInput;
