import React, { ChangeEvent, Component } from 'react';
import moment from 'moment';

import { Datepicker } from '@salesforce/design-system-react';

type click = (event: any, data: any, ...any: any[]) => {};

interface Props {
  action?: (key: string) => click;
}

interface DatepickerDate {
  date: Date;
  formattedDate: [string];
  timezoneOffset: [number];
}

class DateFilter extends Component<Props> {
  state = {
    startValue: moment().subtract(30, 'days'),
    endValue: moment(),
  };

  //Date Setters
  handleStartChange(
    event: ChangeEvent<HTMLInputElement>,
    data: DatepickerDate
  ) {
    this.setState({ startValue: data.date });
  }
  handleEndChange(event: ChangeEvent<HTMLInputElement>, data: DatepickerDate) {
    this.setState({ value: data.date });
  }

  render() {
    return (
      <div className='slds-grid slds-gutters_direct'>
        <div
          className='slds-col'
          style={{
            fontSize: '20px',
            fontFamily: 'Merriweather',
            float: 'left',
            margin: '0px 15px 15px 15px',
          }}
        >
          Start Date
        </div>

        <Datepicker
          className='slds-col'
          onChange={(
            event: ChangeEvent<HTMLInputElement>,
            data: DatepickerDate
          ) => {
            this.handleStartChange(event, data);

            if (this.props.action) {
              const dataAsArray = Object.values(data);
              this.props.action('onChange')(event, data, ...dataAsArray);
            } else if (console) {
              console.log('onChange', event, data);
            }
          }}
          onCalendarFocus={(
            event: ChangeEvent<HTMLInputElement>,
            data: DatepickerDate
          ) => {
            if (this.props.action) {
              const dataAsArray = Object.values(data);
              this.props.action('onCalendarFocus')(event, data, ...dataAsArray);
            }
          }}
          formatter={(date: Date) => {
            return date ? moment(date).format('M/D/YYYY') : '';
          }}
          parser={(dateString: string) => {
            return moment(dateString, 'MM-DD-YYYY').toDate();
          }}
          value={this.state.startValue}
        />
        <div className='slds-col'></div>
        <div
          className='slds-col'
          style={{
            fontSize: '20px',
            fontFamily: 'Merriweather',
            float: 'left',
            margin: '0px 15px 15px 0px',
          }}
        >
          End Date
        </div>

        <Datepicker
          className='slds-col'
          onChange={(
            event: ChangeEvent<HTMLInputElement>,
            data: DatepickerDate
          ) => {
            this.handleEndChange(event, data);

            if (this.props.action) {
              const dataAsArray = Object.values(data);
              this.props.action('onChange')(event, data, ...dataAsArray);
            } else if (console) {
              console.log('onChange', event, data);
            }
          }}
          onCalendarFocus={(
            event: ChangeEvent<HTMLInputElement>,
            data: DatepickerDate
          ) => {
            if (this.props.action) {
              const dataAsArray = Object.values(data);
              this.props.action('onCalendarFocus')(event, data, ...dataAsArray);
            } else if (console) {
              console.log('onCalendarFocus', event, data);
            }
          }}
          formatter={(date: Date) => {
            return date ? moment(date).format('M/D/YYYY') : '';
          }}
          parser={(dateString: string) => {
            return moment(dateString, 'MM-DD-YYYY').toDate();
          }}
          value={this.state.endValue}
        />
        <div className='slds-col'></div>
      </div>
    );
  }
}

export default DateFilter;
