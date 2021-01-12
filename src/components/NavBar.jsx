import React from "react";

import {
  GlobalNavigationBar,
  GlobalNavigationBarLink,
  GlobalNavigationBarRegion,
} from "@salesforce/design-system-react";

const NavBar = () => {
  return (
    <GlobalNavigationBar>
      <GlobalNavigationBarRegion region="primary" navigation>
        <GlobalNavigationBarLink active label="Home" id="home" />
      </GlobalNavigationBarRegion>
      <GlobalNavigationBarRegion region="secondary" navigation>
        <GlobalNavigationBarLink
          active
          label="Local News"
          id="news"
          to="/news"
        />
        <GlobalNavigationBarLink active label="About" id="about" to="/about" />
      </GlobalNavigationBarRegion>
    </GlobalNavigationBar>
  );
};

export default NavBar;
