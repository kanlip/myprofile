import React from "react";
import IconButton from "@material-ui/core/IconButton";

import Tooltip from "@material-ui/core/Tooltip";
import { socials } from "../social";

const SocialButtons =  React.memo(() => {
  const { links } = socials;
  const link = links.map(social => {
    return (
      <div key={social.link}>
        <Tooltip title={social.text}>
          <IconButton component="a" target="_blank" href={social.link}>
            <i className={social.icons} />
          </IconButton>
        </Tooltip>
      </div>
    );
  });
  return link;
});
export default SocialButtons;
