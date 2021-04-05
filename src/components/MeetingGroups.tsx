import React from 'react';
import { Meeting } from '../models';
import { Card } from '@salesforce/design-system-react';
import styles from './MeetingGroups.module.scss';
import { MeetingRow } from './MeetingRow';

export const MeetingGroups = ({ meetings }: { meetings: Meeting[] }) => {
  const currentDate = new Date();

  const previousMeetings = meetings.filter(
    (meeting) => new Date(meeting.MeetingDate) > currentDate
  );
  const upcomingMeetings = meetings.filter(
    (meeting) => new Date(meeting.MeetingDate) < currentDate
  );

  return (
    <div style={{ marginTop: '20px' }}>
      <Card
        header={
          <h1 className={styles.header}>
            Upcoming City Council Meetings Within the Next 30 Days
          </h1>
        }
      >
        <div className={styles.meetingGroupContainer}>
          <div className={styles.meetingGroup}>
            {previousMeetings.map((meeting) => (
              <MeetingRow meeting={meeting} />
            ))}
          </div>
        </div>
      </Card>
      <Card
        header={
          <h1 className={styles.header}>
            Past City Council Meetings Within Last 30 Days
          </h1>
        }
      >
        <div className={styles.meetingGroupContainer}>
          <div className={styles.meetingGroup}>
            {upcomingMeetings.map((meeting) => (
              <MeetingRow meeting={meeting} />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
