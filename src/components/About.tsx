import React from 'react';

const About = () => {
  return (
    <div style={{ width: '1236px', marginLeft: 'auto', marginRight: 'auto' }}>
      <div>
        <h1
          style={{
            fontSize: '68px',
            fontWeight: 'bold',
            float: 'left',
          }}
        >
          Down in San Francisco
        </h1>
        <p style={{ fontSize: '24px', float: 'left' }}>
          Government cannot go unchecked in a democracy. That’s why we worked
          with the team of civic coders at KC Digital Drive to develop
          ___________, a community-designed effort to standardize, collect and
          display public meeting information, including dates, times, locations
          and documentation, in a central database serving Kansas and Missouri.
          _________ equips journalists with public records to report local news
          and residents with information to effect change in their communities.{' '}
        </p>
      </div>
      <div>
        <h1 style={{ fontSize: '68px', fontWeight: 'bold', float: 'left' }}>
          Why we deliver...
        </h1>
        <div style={{ fontSize: '18px', float: 'left' }}>
          _________ equips journalists with public records to report local news
          and residents with information to effect change in their communities.
        </div>
        <div style={{ fontSize: '18px' }}>
          Allows the public to have easier access to the government records,
          enabling easier civic participation.
        </div>
        <div style={{ fontSize: '18px' }}>
          _________ equips journalists with public records to report local news
          and residents with information to effect change in their communities.{' '}
        </div>
        <div style={{ fontSize: '18px' }}>
          Allows the public to have easier access to the government records,
          enabling easier civic participation.
        </div>
      </div>
      <div>
        <h1 style={{ fontSize: '68px', fontWeight: 'bold' }}>Our Partners</h1>
        <div>
          <p style={{ fontSize: '24px' }}>
            Identifying a shared interest in illuminating civic processes to
            preserve democracy, KC Digital Drive joined the effort as a
            technology partner.
          </p>
        </div>
        <div style={{ fontSize: '24px' }}>
          Jackson County Advocate The Kansas City Star Kansas Press Association
          Columbia Missourian at the University of Missouri School of Journalism
          KCUR KLC Journal Northeast News Shawnee Mission Post and Startland
          News. KC Digital Drive
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default About;
