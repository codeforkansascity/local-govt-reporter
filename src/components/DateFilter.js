import React, { Component } from "react";
import moment from "moment";

import Datepicker from "@salesforce/design-system-react/components/date-picker";

class DateFilter extends Component {
  state = {
    startValue: moment().subtract(30, "days"),
    endValue: moment(),
  };

  //Date Setters
  handleStartChange(event, data) {
    this.setState({ startValue: data.date });
  }
  handleEndChange(event, data) {
    this.setState({ value: data.date });
  }

  render() {
    return (
      <div className="slds-grid slds-gutters_direct">
        <div
          className="slds-col"
          style={{
            fontSize: "20px",
            fontFamily: "Merriweather",
            float: "left",
            margin: "0px 15px 15px 0px",
          }}
        >
          Start Date
        </div>

        <Datepicker
          className="slds-col"
          labels={{
            label: "Date",
          }}
          onChange={(event, data) => {
            this.handleStartChange(event, data);

            if (this.props.action) {
              const dataAsArray = Object.keys(data).map((key) => data[key]);
              this.props.action("onChange")(event, data, ...dataAsArray);
            } else if (console) {
              console.log("onChange", event, data);
            }
          }}
          onCalendarFocus={(event, data) => {
            if (this.props.action) {
              const dataAsArray = Object.keys(data).map((key) => data[key]);
              this.props.action("onCalendarFocus")(event, data, ...dataAsArray);
            } else if (console) {
              console.log("onCalendarFocus", event, data);
            }
          }}
          formatter={(date) => {
            return date ? moment(date).format("M/D/YYYY") : "";
          }}
          parser={(dateString) => {
            return moment(dateString, "MM-DD-YYYY").toDate();
          }}
          value={this.state.startValue}
        />

        <div
          className="slds-col"
          style={{
            fontSize: "20px",
            fontFamily: "Merriweather",
            float: "left",
            margin: "0px 15px 15px 0px",
          }}
        >
          End Date
        </div>

        <Datepicker
          className="slds-col"
          labels={{
            label: "Date",
          }}
          onChange={(event, data) => {
            this.handleEndChange(event, data);

            if (this.props.action) {
              const dataAsArray = Object.keys(data).map((key) => data[key]);
              this.props.action("onChange")(event, data, ...dataAsArray);
            } else if (console) {
              console.log("onChange", event, data);
            }
          }}
          onCalendarFocus={(event, data) => {
            if (this.props.action) {
              const dataAsArray = Object.keys(data).map((key) => data[key]);
              this.props.action("onCalendarFocus")(event, data, ...dataAsArray);
            } else if (console) {
              console.log("onCalendarFocus", event, data);
            }
          }}
          formatter={(date) => {
            return date ? moment(date).format("M/D/YYYY") : "";
          }}
          parser={(dateString) => {
            return moment(dateString, "MM-DD-YYYY").toDate();
          }}
          value={this.state.endValue}
        />
      </div>
    );
  }
}

export default DateFilter;
