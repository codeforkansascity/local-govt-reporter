import React from 'react';
import { Meeting } from '../models';
import styles from './MeetingRow.module.scss';
import { Button } from '@salesforce/design-system-react';
import { format } from 'date-fns';
import classnames from 'classnames';

export const MeetingRow = ({
  meeting,
}: {
  meeting: Meeting;
  nextMeeting?: Meeting;
}) => {
  return (
    <div className={styles.meetingRow}>
      <span className={classnames(styles.bold, styles.primaryText)}>{`${format(
        new Date(meeting.MeetingDate),
        'MMM d'
      )}`}</span>
      <span
        className={classnames(styles.bold, styles.primaryText)}
      >{`${meeting.Jurisdiction}`}</span>
      <span className={styles.jurisdiction}>{`${meeting.MeetingType}`}</span>
      <span className={styles.meetingActions}>
        <Button variant='brand'>View All Meetings</Button>
      </span>
    </div>
  );
};
