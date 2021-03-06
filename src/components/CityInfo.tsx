import React from 'react';
import CityInfoMeeting from './CityInfoMeeting';

const CityInfo = () => {
  return (
    <div style={{ width: '1236px', marginLeft: 'auto', marginRight: 'auto' }}>
      <article className='slds-card'>
        <div>Kansas City, MO</div>
        <article className='slds-card slds-size_1-of-2'>
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
