import React, { Component } from "react";

import RadioButtonGroup from "@salesforce/design-system-react/components/radio-button-group";
import Radio from "@salesforce/design-system-react/components/radio-button-group/radio";

class CardFilter extends Component {
  state = {
    filterSelect: "Date",
    local: "Missouri",
    checked: "Date",
  };

  render() {
    const filter = ["Date", "Jurisdiction"];

    return (
      <article
        class="slds-card slds-grid slds-gutters_direct"
        style={{ margin: "20px", float: "left", width: "814px" }}
      >
        <div
          class="slds-col"
          style={{
            fontSize: "20px",
            fontFamily: "Merriweather",
            float: "left",
            margin: "15px",
            width: "220px",
          }}
        >
          Sort meetings by
        </div>
        <RadioButtonGroup
          class="slds-col"
          onChange={(event) => this.setState({ checked: event.target.value })}
          style={{ float: "left", margin: "15px", width: "166px" }}
        >
          {filter.map((filter) => (
            <Radio
              key={filter}
              id={filter}
              labels={{ label: filter }}
              value={filter}
              checked={this.state.checked === filter}
              variant="button-group"
            />
          ))}
        </RadioButtonGroup>
        <div
          class="slds-col"
          style={{ float: "left", width: "250px", margin: "15px" }}
        >
          <p style={{ fontStyle: "italic", textAlign: "left" }}>
            See any inaccuracies in our information?
          </p>
          <p style={{ textAlign: "left" }}>Let us know</p>
        </div>
        {this.state.filterSelect === "Jurisdiction" && (
          <div>In Jurisdiction</div>
        )}
      </article>
    );
  }
}

export default CardFilter;
