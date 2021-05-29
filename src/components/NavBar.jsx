import React from 'react';

import {
  GlobalNavigationBar,
  GlobalNavigationBarLink,
  GlobalNavigationBarRegion,
} from '@salesforce/design-system-react';
import { AppContainer } from './AppContainer';

import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <GlobalNavigationBar className={styles.NavBarMain}>
      <GlobalNavigationBarRegion
        className={styles.PrimaryNav}
        region='primary'
        navigation
      >
        <AppContainer className={styles.NavContainer}>
          <GlobalNavigationBarLink
            className={styles.NavBarItem}
            active
            label='Home'
            id='home'
          />
          <GlobalNavigationBarLink
            className={styles.NavBarItem}
            label='Local News'
            id='news'
            to='/news'
          />
          <GlobalNavigationBarLink
            className={styles.NavBarItem}
            label='About'
            id='about'
            to='/about'
          />
        </AppContainer>
      </GlobalNavigationBarRegion>
    </GlobalNavigationBar>
  );
};

export default NavBar;
