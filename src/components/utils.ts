export const getJurisdictionMeetingsPage = (
  jurisdiction: string,
  state: string = ''
) => {
  switch (jurisdiction) {
    case 'Mission':
      return 'https://www.missionks.org/agenda.aspx';
    case 'Jackson':
      return 'https://jacksonco.legistar.com/Calendar.aspx';
    case 'Overland Park':
      return 'https://opkansas.civicweb.net/Portal/MeetingTypeList.aspx';
    case 'KCMO':
      return 'http://cityclerk.kcmo.org/liveweb/Meetings/HistoricalMeetings.aspx';
    case 'Wyandotte County':
      return 'https://wycokck.civicclerk.com/web/home.aspx';
    default:
      return ``;
  }
};

export const getJurisdictionLinkTitle = (
  jurisdiction: string,
  state: string
) => {
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
