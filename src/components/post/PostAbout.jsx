import React from "react";
import GroupLogo from "../../assets/images/programmingGroupLogo.png";
import IconCake from "../../assets/icons/iconCake.png";
import IconEye from "../../assets/icons/iconEye.png"
import {
  Accordion,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Switch,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
function PostAbout() {
  return (
    <div className="postAbout__container">
      <span className="postAbout__header"></span>
      <div className="postAbout__community-group-info">
        <div className="postAbout__community-header-info">
          <img className="postAbout__community-group-logo" src={GroupLogo}></img>
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
            <div className="postAbout__community-people-connected">
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
          <button className="postAbout__button-join">Join</button>
          <button className="postAbout__button-create-post">Create Post</button>
        </div>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} display="inline-flex" alignItems="center" justifyContent="space-between" width="100%">
            <img  className="eyeIcon__community__theme" src={IconEye}></img>
           Community Theme <Switch></Switch>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default PostAbout;
