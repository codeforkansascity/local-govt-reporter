import React, { Component } from "react";

import RadioButtonGroup from "@salesforce/design-system-react/components/radio-button-group";
import Radio from "@salesforce/design-system-react/components/radio-button-group/radio";

class JurisdictionFilter extends Component {
  state = {
    stateChecked: "Missouri",
    jurisdictionChecked: "All",
  };
  render() {
    const stateFilter = ["Missouri", "Kansas"];
    const jurisdictionFilter = ["All", "County", "Local"];

    return (
      <div className="slds-grid slds-gutters_direct">
        <div
          className="slds-col"
          style={{
            fontSize: "20px",
            fontFamily: "Merriweather",
            float: "left",
            margin: "15px",
          }}
        >
          State
        </div>
        <RadioButtonGroup
          className="slds-col"
          onChange={(event) =>
            this.setState({ stateChecked: event.target.value })
          }
          style={{ margin: "15px" }}
        >
          {stateFilter.map((stateFilter) => (
            <Radio
              key={stateFilter}
              id={stateFilter}
              labels={{ label: stateFilter }}
              value={stateFilter}
              checked={this.state.stateChecked === stateFilter}
              variant="button-group"
            />
          ))}
        </RadioButtonGroup>

        <div
          className="slds-col"
          style={{
            fontSize: "20px",
            fontFamily: "Merriweather",
            float: "left",
            margin: "15px",
          }}
        >
          Jurisdiction
        </div>
        <RadioButtonGroup
          className="slds-col"
          onChange={(event) =>
            this.setState({ jurisdictionChecked: event.target.value })
          }
          style={{ margin: "15px" }}
        >
          {jurisdictionFilter.map((jurisdictionFilter) => (
            <Radio
              key={jurisdictionFilter}
              id={jurisdictionFilter}
              labels={{ label: jurisdictionFilter }}
              value={jurisdictionFilter}
              checked={this.state.jurisdictionChecked === jurisdictionFilter}
              variant="button-group"
            />
          ))}
        </RadioButtonGroup>
      </div>
    );
  }
}

export default JurisdictionFilter;
