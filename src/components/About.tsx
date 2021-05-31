import React from 'react';
import { AppContainer } from './AppContainer';
import { Typography } from './Typography';
import styles from './About.module.scss';
import homeStyles from './HomePage.module.scss';
import classNames from 'classnames';
import SkyLine from '../images/kansas_city_skyline.png';
import { Spacer } from './Spacer';

const About = () => {
  return (
    <>
      <section
        className={classNames(homeStyles.OddSection, styles.CenteredSection)}
      >
        <AppContainer>
          <Typography fontWeight='bold' variant='header' font='primary'>
            <h1>Down in San Francisco</h1>
          </Typography>
          <Spacer bottom />
          <Typography>
            <p>Government cannot go unchecked in a democracy.</p>
          </Typography>
          <Spacer bottom />
          <Typography>
            <p>
              That’s why we worked with the team of civic coders at KC Digital
              Drive to develop ___________, a community-designed effort to
              standardize, collect and display public meeting information,
              including dates, times, locations and documentation, in a central
              database serving Kansas and Missouri. _________ equips journalists
              with public records to report local news and residents with
              information to effect change in their communities.{' '}
            </p>
          </Typography>
        </AppContainer>
      </section>
      <section>
        <AppContainer>
          <div
            className={classNames(
              homeStyles.BaseSection,
              homeStyles.MidSection
            )}
          >
            <img
              className={homeStyles.BaseSectionImage}
              src={SkyLine}
              alt='Protest Outside'
              style={{ height: 400 }}
            />
            <div className={homeStyles.BaseSectionText}>
              <Spacer all>
                <Typography fontWeight='bold' variant='header' font='primary'>
                  <h1>Why we deliver...</h1>
                </Typography>
                <Spacer bottom />
                <Typography>
                  <p>
                    Public meetings are important spaces for democracy and where
                    reporters hold public figures accountable. But with newsroom
                    staffs shrinking and COVID-19 limiting in-person attendance,
                    transparency is getting tougher. Likewise, the pandemic has
                    changed civic participation for residents looking to engage
                    in learning and monitor local government at public meetings.
                  </p>
                  <Spacer bottom />
                  <p>
                    The meetings we cover in Missouri are subject to the state’s
                    Sunshine Law, which states that “meetings, records, votes,
                    actions and deliberations of public governmental bodies
                    shall be open to the public unless otherwise provided by
                    law.”
                  </p>
                </Typography>
              </Spacer>
            </div>
          </div>
        </AppContainer>
      </section>

      {/* 
                Replace with imagese wheen ready


      <section
        className={classNames(homeStyles.OddSection, styles.CenteredSection)}
      >
        <AppContainer>
          <Typography variant='smallheader'>
            <h1>Our Partners</h1>
          </Typography>
          <Typography variant='small'>
            <p>
              Identifying a shared interest in illuminating civic processes to
              preserve democracy, KC Digital Drive joined the effort as a
              technology partner.
            </p>
          </Typography>
          
          
          
          <Typography variant='body2'>
            <p>
              Jackson County Advocate The Kansas City Star Kansas Press
              Association Columbia Missourian at the University of Missouri
              School of Journalism KCUR KLC Journal Northeast News Shawnee
              Mission Post and Startland News. KC Digital Drive
            </p>
          </Typography>
        </AppContainer>
      </section> */}
      <footer className={homeStyles.Footer}>
        <AppContainer>
          <p>
            Made by
            <a className={homeStyles.FooterLink} href='https://codeforkc.org/'>
              CodeForKC
            </a>
            <span style={{ float: 'right' }}>@ Copyright 2021</span>
          </p>
        </AppContainer>
      </footer>
    </>
  );
};

export default About;
