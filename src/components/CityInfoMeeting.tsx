import React from 'react';

const CityInfoMeeting = () => {
  return (
    <div style={{ width: '1236px', marginLeft: 'auto', marginRight: 'auto' }}>
      <article
        className='slds-card'
        style={{ display: 'inline-block', width: '100%', height: '100px' }}
      >
        <article
          className='slds-card slds-size_1-of-2'
          style={{
            float: 'left',
            paddingLeft: '15px',
            display: 'inline-block',
          }}
        >
          <div style={{ float: 'left' }}>Date and time</div>
          <div style={{ float: 'right' }}>Location and Meeting Type</div>
        </article>
        <article
          className='slds-card slds-size_1-of-2'
          style={{ float: 'right' }}
        >
          <div>buttons</div>
        </article>
      </article>
    </div>
  );
};

export default CityInfoMeeting;
