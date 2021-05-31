import React from 'react';
import styles from './CityInfo.module.scss';

import { Button } from '@salesforce/design-system-react';
import { API_URL, generateDateRange } from './TopInfoBar';
import { useQuery } from 'react-query';
import { AppContainer } from './AppContainer';
import { useParams } from 'react-router-dom';
import { MeetingRow } from './MeetingRow';
import { Typography } from './Typography';
import { Spacer } from './Spacer';
import { Meeting } from '../models';
import { getJurisdictionMeetingsPage } from './utils';

// const Jurisdictions = [
//   'KCMO',
//   'Wyandotte County',
//   'Johnson County',
//   'Overland Park',
//   'KCMO',
//   'Jackson',
// ];

const getTitle = (jurisdiction: string) => {
  switch (jurisdiction) {
    case 'KCMO':
      return 'Kansas City, MO';
    case 'Wyandotte County':
      return 'Wyandotte County, KS';
    case 'Johnson County':
      return 'Johnson County, KS';
    case 'Overland Park':
      return 'Overland Park, KS';
    case 'Jackson':
      return 'Jackson County, MO';
    default:
      return jurisdiction;
  }
};

export const CityInfo = () => {
  let { id } = useParams<{ id: string }>();
  const { startDate, endDate } = generateDateRange();

  const { isLoading, data: meetingData } = useQuery('repoData', () =>
    fetch(
      `${API_URL}/api/meetings?start=0&length=100&startDate=${startDate
        .toISOString()
        .substring(0, 10)}&endDate=${endDate
        .toISOString()
        .substring(0, 10)}&Jurisdiction=${id}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <p>Loading Data</p>;
  }

  const currentDate = new Date();
  const meetings = meetingData.data as Meeting[];

  const upcomingMeetings = meetings.filter(
    (meeting) => new Date(meeting.MeetingDate) > currentDate
  );
  const previousMeetings = meetings.filter(
    (meeting) => new Date(meeting.MeetingDate) < currentDate
  );

  return (
    <AppContainer>
      <Spacer top bottom>
        <article className='slds-card'>
          <Spacer all>
            <Typography variant='smallheader' font='primary'>
              <h1>
                <span>{getTitle(id)}</span>
                <Spacer left isHorizontal />
                <Typography isInline className={styles.JurisdictionLink}>
                  <Button
                    className='slds-button slds-button_brand'
                    variant='outline-brand'
                    style={{
                      color: 'rgb(43, 104, 134)',
                    }}
                  >
                    <a
                      href={getJurisdictionMeetingsPage(id)}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Visit City Council Website
                    </a>
                  </Button>
                </Typography>
              </h1>
            </Typography>
          </Spacer>
        </article>
      </Spacer>
      <article className='slds-card'>
        <Spacer all>
          <Typography variant='body2' font='primary'>
            <h2>Upcoming Meetings</h2>
          </Typography>
          <div
            style={{
              display: 'table',
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            {upcomingMeetings.map((meeting) => (
              <MeetingRow meeting={meeting} hideJurisdiction>
                <Button variant='brand'>
                  <a href={meeting.SourceURL} target='_blank' rel='noreferrer'>
                    View Agenda
                  </a>
                </Button>
              </MeetingRow>
            ))}
          </div>
        </Spacer>
      </article>
      <article className='slds-card'>
        <Spacer all>
          <Typography variant='body2' font='primary'>
            <h2>Past Meetings</h2>
          </Typography>
          <div
            style={{
              display: 'table',
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            {previousMeetings.map((meeting) => (
              <MeetingRow meeting={meeting} hideJurisdiction>
                <Button variant='brand'>
                  <a href={meeting.SourceURL} target='_blank' rel='noreferrer'>
                    View Agenda
                  </a>
                </Button>
              </MeetingRow>
            ))}
          </div>
        </Spacer>
      </article>
    </AppContainer>
  );
};
