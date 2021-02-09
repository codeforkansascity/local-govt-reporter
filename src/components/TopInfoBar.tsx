import React from 'react';

import { sortedIndexBy } from 'lodash';

import MeetingCard from './MeetingCard';
import CardFilter from './CardFilter';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './TopInfoBar.scss';
import { Button } from '@salesforce/design-system-react';
import { useQuery } from 'react-query';
import { Meeting } from '../models';

interface MeetingHash {
  [key: string]: Meeting[];
}

export const API_URL =
  process.env.API_URL ||
  'https://jt5wf041v4.execute-api.us-east-2.amazonaws.com/Prod';

const findNextMeeting = (data: Meeting[]) => {
  const currentDate = new Date(new Date().toDateString());

  for (var i = 0; i < data.length; i++) {
    if (new Date(data[i].MeetingDate) > currentDate) {
      return data[i];
    }
  }

  return undefined;
};

const findPreviousMeeting = (data: Meeting[]) => {
  const currentDate = new Date(new Date().toDateString());

  for (var i = data.length - 1; i > 0; i--) {
    if (new Date(data[i].MeetingDate.replaceAll('-', '/')) < currentDate) {
      return data[i];
    }
  }

  return undefined;
};

const sortData = (data: Meeting[]) => {
  const hash = data.reduce<MeetingHash>((dataHash, meeting) => {
    if (dataHash[meeting.Jurisdiction]) {
      dataHash[meeting.Jurisdiction].splice(
        sortedIndexBy(
          dataHash[meeting.Jurisdiction],
          meeting,
          (meeting) => meeting.MeetingDate
        ),
        0,
        meeting
      );
    } else {
      dataHash[meeting.Jurisdiction] = [meeting];
    }
    return dataHash;
  }, {});

  return hash;
};

const getMeetingDates = (sortedData: MeetingHash) => {
  return Object.values(sortedData).reduce<MeetingHash>((dataHash, meetings) => {
    meetings.forEach((meeting) => {
      if (dataHash[meeting.MeetingDate]) {
        dataHash[meeting.MeetingDate].push(meeting);
      } else {
        dataHash[meeting.MeetingDate] = [meeting];
      }
    });

    return dataHash;
  }, {});
};

const TopInfoBar = () => {
  const { isLoading, error, data: meetings = [] } = useQuery('repoData', () =>
    fetch(`${API_URL}/api/meetings`).then((res) => res.json())
  );

  if (isLoading) {
    return <p>Loading Page</p>;
  }

  if (error) {
    return <p>Failed to Fetch Data</p>;
  }

  const sortedData = sortData(meetings);
  const meetingDates = getMeetingDates(sortedData);

  return (
    <div style={{ width: '1236px', marginLeft: 'auto', marginRight: 'auto' }}>
      <div className='slds-grid slds-gutters'>
        <div className='slds-col slds-size_2-of-3'>
          <article
            className='slds-card'
            style={{
              margin: '20px',
              float: 'left',
              width: '800px',
              height: '215px',
            }}
          >
            <header className='slds-card__header'>
              <h1
                style={{
                  fontSize: '20px',

                  fontFamily: 'Merriweather',
                  fontWeight: 'bold',
                }}
              >
                Find local meetings and meeting minutes
              </h1>
            </header>
            <div className='slds-card__body slds-card__body_inner'>
              <p style={{ fontSize: '14px', textAlign: 'left' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem. Aliquam erat volutpat. Donec placerat nisl
                magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                Aliquam erat volutpat. Donec placerat nisl magna, et faucibus.
              </p>
              <footer>
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
                  Need more help?
                </Button>
              </footer>
            </div>
          </article>
          <CardFilter />
        </div>

        <article
          className='slds-card slds-col slds-size_1-of-3'
          style={{
            float: 'right',
            width: '339px',
            height: '375px',
            margin: '20px',
          }}
        >
          <header className='slds-card__header'>
            <h1
              style={{
                fontSize: '20px',
                fontFamily: 'Merriweather',
                fontWeight: 'bold',
              }}
            >
              Upcoming Meetings
            </h1>
          </header>
          <Calendar
            calendarType='US'
            tileClassName={({ activeStartDate, date, view }) => {
              if (meetingDates[date.toISOString().substring(0, 10)]) {
                return 'meeting-date';
              }

              return null;
            }}
          />
        </article>
      </div>

      <div className='slds-grid slds-wrap'>
        {Object.keys(sortedData).map((key) => {
          const previousMeeting = findPreviousMeeting(sortedData[key]);

          if (previousMeeting) {
            return (
              <MeetingCard
                key={key}
                meeting={previousMeeting}
                nextMeeting={findNextMeeting(sortedData[key])}
              />
            );
          }

          return undefined;
        })}
      </div>
    </div>
  );
};

export default TopInfoBar;
