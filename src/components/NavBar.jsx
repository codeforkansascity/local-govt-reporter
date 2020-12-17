import React from "react";

import {
  GlobalNavigationBar,
  GlobalNavigationBarLink,
  GlobalNavigationBarRegion,
  IconSettings,
} from "@salesforce/design-system-react";

const NavBar = () => {
  return (
    <IconSettings iconPath="/assets/icons">
      <GlobalNavigationBar>
        <GlobalNavigationBarRegion region="primary" navigation>
          <GlobalNavigationBarLink active label="Home" id="home-link" />
        </GlobalNavigationBarRegion>
      </GlobalNavigationBar>
    </IconSettings>
  );
};

export default NavBar;
