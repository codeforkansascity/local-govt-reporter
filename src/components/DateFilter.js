import React, { Component } from "react";
import moment from "moment";

import Datepicker from "@salesforce/design-system-react/components/date-picker";

class DateFilter extends Component {
  state = {
    value: undefined,
  };
  render() {
    const handleChange = (event, data) => {
      this.setState({ value: data.date });
    };

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
            this.handleChange(event, data);

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
          value={this.state.value}
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
            this.handleChange(event, data);

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
          value={this.state.value}
        />
      </div>
    );
  }
}

export default DateFilter;
