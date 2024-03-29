import React from 'react';
import { Meeting } from '../models';
import { getJurisdictionLinkTitle, getJurisdictionMeetingsPage } from './utils';

const MeetingCard = ({
  meeting,
  nextMeeting,
}: {
  meeting: Meeting;
  nextMeeting?: Meeting;
}) => {
  return (
    <article className='slds-card'>
      <header className='slds-card__header'>
        <h2
          className='slds-card__header-title'
          style={{
            fontSize: '24px',
            fontFamily: 'Merriweather',
            fontWeight: 'bold',
          }}
        >
          {getJurisdictionLinkTitle(meeting.Jurisdiction, meeting.State)}
        </h2>
      </header>
      <div className='slds-card__body slds-card__body_inner'>
        {/*Left Body Div*/}

        {meeting && (
          <div
            style={{
              width: '50%',
              height: '215px',
              float: 'left',
              textAlign: 'left',
              paddingTop: '20px',
              paddingLeft: '15px',
              paddingRight: '20px',
            }}
          >
            <p style={{ fontSize: '10pt', paddingBottom: '5px' }}>
              Last Meeting
            </p>

            <p style={{ fontSize: '12pt', fontWeight: 'bold' }}>
              {meeting.MeetingDate}
            </p>
            <p
              style={{
                fontSize: '12pt',
                fontStyle: 'italic',
                paddingTop: '5px',
              }}
            >
              <a href={meeting.SourceURL}>{meeting.MeetingType}</a>
            </p>
          </div>
        )}
        {/*Right Body Div*/}
        {nextMeeting && (
          <div
            style={{
              width: '50%',
              float: 'right',
              textAlign: 'left',
              paddingTop: '20px',
              paddingRight: '5px',
            }}
          >
            <p style={{ fontSize: '10pt', paddingBottom: '5px' }}>
              Next Meeting
            </p>

            <p style={{ fontSize: '12pt', fontWeight: 'bold' }}>
              {nextMeeting.MeetingDate}
            </p>
            <p
              style={{
                fontSize: '12pt',
                fontStyle: 'italic',
                paddingTop: '5px',
              }}
            >
              <a href={meeting.SourceURL}>{nextMeeting.MeetingType}</a>
            </p>
          </div>
        )}
      </div>
      <footer className='slds-card__footer'>
        <a
          className='slds-button slds-button_brand '
          href={getJurisdictionMeetingsPage(
            meeting.Jurisdiction,
            meeting.State
          )}
          style={{
            position: 'absolute',
            bottom: '15px',
            left: '15px',
            margin: '15px',
            fontSize: '12pt',
          }}
        >
          {`View All Info For ${getJurisdictionLinkTitle(
            meeting.Jurisdiction,
            meeting.State
          )}`}
        </a>
      </footer>
    </article>
  );
};

export default MeetingCard;
