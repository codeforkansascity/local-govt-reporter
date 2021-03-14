import React from 'react';
import CityInfoMeeting from './CityInfoMeeting';

import { Button } from '@salesforce/design-system-react';

const CityInfo = () => {
  return (
    <div style={{ width: '1236px', marginLeft: 'auto', marginRight: 'auto' }}>
      <article
        className='slds-card'
        style={{ display: 'inline-block', width: '100%', height: '265px' }}
      >
        <article
          className='slds-card slds-size_1-of-2'
          style={{ float: 'left', paddingLeft: '15px' }}
        >
          <h1 style={{ fontSize: '26pt', textAlign: 'left', padding: '15px' }}>
            Kansas City, MO
          </h1>
          <p style={{ fontSize: '12pt', textAlign: 'left', padding: '15px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
            faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <Button
            className='slds-button slds-button_brand '
            variant='outline-brand'
            style={{
              color: 'blue',
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              margin: '15px',
              fontSize: '12pt',
            }}
          >
            Visit City Council Website
          </Button>
        </article>
        <article
          className='slds-card slds-size_1-of-2'
          style={{ float: 'right' }}
        >
          Meet the Council
        </article>
      </article>
      <article className='slds-card'>
        <h1>Upcoming Meetings</h1>
        <CityInfoMeeting />
      </article>
      <article className='slds-card'>
        <h1>Past Meetings</h1>
        <CityInfoMeeting />
      </article>
    </div>
  );
};

export default CityInfo;
