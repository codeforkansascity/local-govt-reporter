import React, { useState } from 'react';

import { isArray, sortedIndexBy } from 'lodash';

import MeetingCard from './MeetingCard';
import CardFilter from './CardFilter';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './TopInfoBar.scss';
import { Button, Popover } from '@salesforce/design-system-react';
import { useQuery } from 'react-query';
import { Meeting } from '../models';
import { MeetingGroups } from './MeetingGroups';
import classNames from 'classnames';
import { format, parseISO } from 'date-fns';

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

const sortDataByDate = (data: Meeting[]) => {
  return data.sort((meetingA, meetingB) => {
    if (new Date(meetingA.MeetingDate) > new Date(meetingB.MeetingDate)) {
      return 0;
    }

    return 1;
  });
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

const generateDateRange = () => {
  const startDate = new Date();
  const endDate = new Date();

  startDate.setDate(startDate.getDate() - 14);
  endDate.setDate(endDate.getDate() + 30);
  return {
    startDate,
    endDate,
  };
};

const TopInfoBar = () => {
  const [filterState, setFilterState] = useState('Date');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { startDate, endDate } = generateDateRange();
  const { isLoading, error, data: meetingData } = useQuery('repoData', () =>
    fetch(
      `${API_URL}/api/meetings?start=0&length=100&startDate=${startDate
        .toISOString()
        .substring(0, 10)}&endDate=${endDate.toISOString().substring(0, 10)}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <p>Loading Page</p>;
  }

  if (error) {
    return <p>Failed to Fetch Data</p>;
  }

  const sortedData = sortData(meetingData.data);
  const meetingDates = getMeetingDates(sortedData);
  const meetingSortDates = sortDataByDate(meetingData.data);

  return (
    <div
      style={{
        width: '1236px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: '50px',
      }}
    >
      <div className='slds-grid' style={{ marginTop: '20px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: '20px',
          }}
        >
          <article className='slds-card' style={{ flexGrow: 1 }}>
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
              <p style={{ fontSize: '14px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem. Aliquam erat volutpat. Donec placerat nisl
                magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                Aliquam erat volutpat. Donec placerat nisl magna, et faucibus.
              </p>
              <footer>
                <Button
                  className='slds-button slds-button_brand'
                  variant='outline-brand'
                  style={{
                    color: 'blue',
                    marginTop: '20px',
                    fontSize: '12pt',
                  }}
                >
                  Need more help?
                </Button>
              </footer>
            </div>
          </article>
          <CardFilter
            onFilterChange={({ filter }) => {
              setFilterState(filter);
            }}
            filter={filterState}
          />
        </div>

        <article
          className='slds-card'
          style={{
            padding: '0 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
            value={selectedDate}
            onChange={(value) => !isArray(value) && setSelectedDate(value)}
            calendarType='US'
            tileClassName={({ activeStartDate, date, view }) => {
              if (meetingDates[date.toISOString().substring(0, 10)]) {
                return classNames(
                  'meeting-date',
                  `date-${date.toISOString().substring(0, 10)}`
                );
              }

              return classNames(
                'disabled-date',
                `date-${date.toISOString().substring(0, 10)}`
              );
            }}
            tileDisabled={(props) =>
              meetingDates[props.date.toISOString().substring(0, 10)] ===
              undefined
            }
          />
          <Popover
            className='something'
            style={{ border: 'none', borderRadius: 0 }}
            key={selectedDate?.toISOString() || ''}
            isOpen={selectedDate !== undefined}
            hasNoCloseButton
            classNameBody='popover-body'
            body={
              selectedDate && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Button
                    className='button-styles'
                    style={{ marginLeft: 'auto', float: 'right' }}
                    variant='base'
                    onClick={() => {
                      setSelectedDate(undefined);
                    }}
                  >
                    X
                  </Button>
                  <div>
                    {(
                      meetingDates[
                        selectedDate.toISOString().substring(0, 10)
                      ] ?? []
                    )?.map((value) => (
                      <div style={{ marginBottom: 16 }}>
                        <h1 className='popover-meeting-header'>{`${format(
                          parseISO(value.MeetingDate),
                          'MMM d'
                        )} ${value.Jurisdiction}`}</h1>
                        <em>{value.MeetingType}</em>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            id='popover-heading'
            onRequestTargetElement={() =>
              selectedDate &&
              document.querySelector(
                `.date-${selectedDate?.toISOString().substring(0, 10)}`
              )
            }
          />
        </article>
      </div>
      {filterState === 'Jurisdiction' && (
        <div className='meetings slds-grid slds-wrap'>
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
      )}
      {filterState === 'Date' && <MeetingGroups meetings={meetingSortDates} />}
    </div>
  );
};

export default TopInfoBar;
