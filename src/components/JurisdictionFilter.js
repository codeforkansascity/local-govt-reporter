import React, { Component } from "react";

import RadioButtonGroup from "@salesforce/design-system-react/components/radio-button-group";
import Radio from "@salesforce/design-system-react/components/radio-button-group/radio";
import IconSettings from "@salesforce/design-system-react/components/icon-settings";
import Dropdown from "@salesforce/design-system-react/components/menu-dropdown";

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
            margin: "0px 15px 15px 0px",
          }}
        >
          State
        </div>
        <RadioButtonGroup
          className="slds-col"
          onChange={(event) =>
            this.setState({ stateChecked: event.target.value })
          }
          style={{ margin: "0px 15px 15px 0px" }}
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
        <div className="slds-col"></div>
        <Dropdown
          className="slds-col"
          align="right"
          iconCategory="utility"
          iconName="down"
          iconPosition="right"
          label="Jurisdiction"
          options={[
            { label: "Menu Item One", value: "A0" },
            { label: "Menu Item Two", value: "B0" },
            { label: "Menu Item Three", value: "C0" },
            { type: "divider" },
            { label: "Menu Item Four", value: "D0" },
            { label: "Menu Item Five", value: "E0" },
            { label: "Menu Item Six", value: "F0" },
            { type: "divider" },
            { label: "Menu Item Seven", value: "G0" },
          ]}
        />
        <div className="slds-col"></div>
      </div>
    );
  }
}

export default JurisdictionFilter;
