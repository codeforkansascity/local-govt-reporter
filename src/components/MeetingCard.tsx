import React from 'react';
import { Meeting } from '../models';

const getJurisdictionMeetingsPage = (jurisdiction: string, state: string) => {
  switch (jurisdiction) {
    case 'Mission':
      return 'https://www.missionks.org/agenda.aspx';
    case 'Jackson':
      return 'https://jacksonco.legistar.com/Calendar.aspx';
    case 'Overland Park':
      return 'https://opkansas.civicweb.net/Portal/MeetingTypeList.aspx';
    case 'KCMO':
      return 'http://cityclerk.kcmo.org/liveweb/Meetings/HistoricalMeetings.aspx';
    default:
      return ``;
  }
};

const getJurisdictionLinkTitle = (jurisdiction: string, state: string) => {
  switch (jurisdiction) {
    case 'Jackson':
    case 'Johnson':
      return `${jurisdiction} County, ${state}`;
    case 'KCMO':
      return 'Kansas City, MO';
    default:
      return `${jurisdiction}, ${state}`;
  }
};

const MeetingCard = ({
  meeting,
  nextMeeting,
}: {
  meeting: Meeting;
  nextMeeting?: Meeting;
}) => {
  return (
    <article
      className='slds-card slds-col slds-size_1-of-2'
      style={{ height: '300px', width: '578px', float: 'left', margin: '20px' }}
    >
      <header className='slds-card__header'>
        <h2
          className='slds-card__header-title'
          style={{
            fontSize: '24px',
            paddingTop: '10px',
            paddingLeft: '15px',
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
              float: 'left',
              textAlign: 'left',
              paddingTop: '20px',
              paddingLeft: '15px',
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
              {meeting.MeetingType}
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
              {nextMeeting.MeetingType}
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
