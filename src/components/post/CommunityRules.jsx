import React, { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
  Switch,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import IconEnglish from "../../assets/icons/iconEnglish.png"
import IconSpanish from "../../assets/icons/iconSpanish.png"

function CommunityRules() {
  const [t, i18n] = useTranslation("global");
  const redditRules = t("redditRules", { returnObjects: true });

  const changeLanguageHandler = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div id="container__comments" className="communityRules__container">
      <span className="communityRules__header">
        r/programming Rules
        <button onClick={() => changeLanguageHandler("en")}><img className="icon__language" src={IconEnglish}></img></button>
        <button onClick={() => changeLanguageHandler("es")}><img className="icon__language" src={IconSpanish}></img></button>
      </span>

      <Accordion allowMultiple defaultIndex={[0]}>
        {Object.keys(redditRules).map((ruleKey, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {t(`redditRules.${ruleKey}.rule_title`)}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {t(`redditRules.${ruleKey}.rule_content`)}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default CommunityRules;
