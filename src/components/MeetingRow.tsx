import React from 'react';
import { Meeting } from '../models';
import styles from './MeetingRow.module.scss';
import { format, parseISO } from 'date-fns';
import classnames from 'classnames';

export const MeetingRow = ({
  meeting,
  hideJurisdiction = false,
  children,
}: {
  meeting: Meeting;
  hideJurisdiction?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <div className={styles.meetingRow}>
      <span className={classnames(styles.bold, styles.primaryText)}>{`${format(
        parseISO(meeting.MeetingDate),
        'MMM d'
      )}`}</span>
      {!hideJurisdiction && (
        <span
          className={classnames(styles.bold, styles.primaryText)}
        >{`${meeting.Jurisdiction}`}</span>
      )}
      <span className={styles.jurisdiction}>{`${meeting.MeetingType}`}</span>
      <span className={styles.meetingActions}>{children}</span>
    </div>
  );
};
