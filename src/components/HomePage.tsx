import React from 'react';
import { AppContainer } from './AppContainer';
import styles from './HomePage.module.scss';
import { Spacer } from './Spacer';
import TopImage from './HomePageImages/top.png';
import CityHall from './HomePageImages/cityhall.png';
import Typing from './HomePageImages/typing.png';
import Meeting from './HomePageImages/generic_meeting.png';
import Protest from '../images/protest.png';
import MeetingProtest from '../images/meeting_protest.png';
import classNames from 'classnames';

export const HomePage = () => (
  <>
    <section className={styles.OddSection}>
      <AppContainer>
        <div className={styles.TopText}>
          <h1 className={styles.FontTwo} style={{ fontSize: '4em' }}>
            An open-source digital treasure trove for local government
            information
          </h1>
          <Spacer bottom={1} />
          <p style={{ fontSize: '2em' }}>
            A certain king had a beautiful garden, and in the garden stood a
            tree which bore golden apples
          </p>
          <Spacer bottom={2} />
          <p style={{ fontSize: '2em' }}>The only resource in the KC Metro.</p>
        </div>
        <img
          src={TopImage}
          alt=''
          width='486'
          height='347'
          className={styles.TopImage}
        />
      </AppContainer>
    </section>
    <section className={styles.MidSection}>
      <AppContainer>
        <div className={styles.MidSectionHeader}>
          <p style={{ fontSize: '2em' }}>Our Services</p>
          <p className={styles.FontTwo} style={{ fontSize: '4em' }}>
            Empowering you to be an informed member your community
          </p>
          <p className={styles.MidSectionDescription}>
            Time passed on again, and the youngest son too wished to set out
            into the wide world to seek for the golden bird; but his father
            would not listen.
          </p>
        </div>
        <Spacer top={3} bottom={2}>
          <div className={styles.MidSectionGrid}>
            <div className={styles.MidImageContainer}>
              <img className={styles.MidImage} src={Meeting} alt='Meeting' />
            </div>
            <div className={styles.MidImageContainer}>
              <img className={styles.MidImage} src={CityHall} alt='City Hall' />
            </div>
            <div className={styles.MidImageContainer}>
              <img className={styles.MidImage} src={Typing} alt='Typing' />
            </div>
          </div>
        </Spacer>
      </AppContainer>
    </section>
    <section className={styles.OddSection}>
      <AppContainer>
        <div className={styles.BaseSection}>
          <img
            className={styles.BaseSectionImage}
            src={Protest}
            alt='Protest Outside'
          />
          <div
            className={classNames(
              styles.BaseSectionText,
              styles.BaseSectionTextCentered
            )}
          >
            <p className={styles.FontTwo} style={{ fontSize: '2em' }}>
              For the people - it's your right
            </p>
          </div>
        </div>
      </AppContainer>
      <AppContainer>
        <div className={styles.BaseSection}>
          <div
            className={classNames(
              styles.BaseSectionText,
              styles.BaseSectionTextCentered
            )}
          >
            <p className={styles.FontTwo} style={{ fontSize: '2em' }}>
              Decide what matters to you and how you act on it
            </p>
          </div>
          <img
            alt='Protest Inside'
            className={styles.BaseSectionImage}
            src={MeetingProtest}
          />
        </div>
      </AppContainer>
    </section>
    <section className={styles.Footer}>
      <AppContainer>
        <p>
          Made by{'   '}
          <a className={styles.FooterLink} href='https://codeforkc.org/'>
            CodeForKC
          </a>
          <span style={{ float: 'right' }}>@ Copyright 2021</span>
        </p>
      </AppContainer>
    </section>
  </>
);
