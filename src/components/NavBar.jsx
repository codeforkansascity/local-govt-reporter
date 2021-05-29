import React from 'react';

import {
  GlobalNavigationBar,
  GlobalNavigationBarLink,
  GlobalNavigationBarRegion,
} from '@salesforce/design-system-react';

import { useHistory } from 'react-router-dom';

import { AppContainer } from './AppContainer';

import styles from './NavBar.module.scss';

const NavBar = () => {
  let history = useHistory();

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
            label='Home'
            id='home'
            href='#'
            onClick={() => history.push('/home')}
          />
          <GlobalNavigationBarLink
            className={styles.NavBarItem}
            label='Local News'
            id='news'
            href='#'
            onClick={() => history.push('/news')}
          />
          <GlobalNavigationBarLink
            className={styles.NavBarItem}
            label='About'
            id='about'
            href='#'
            onClick={() => history.push('/about')}
          />
        </AppContainer>
      </GlobalNavigationBarRegion>
    </GlobalNavigationBar>
  );
};

export default NavBar;
