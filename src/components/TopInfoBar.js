import React, { Component } from "react";
import MeetingCard from "./MeetingCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Button from "@salesforce/design-system-react/components/button";
import RadioButtonGroup from "@salesforce/design-system-react/components/radio-button-group";
import Radio from "@salesforce/design-system-react/components/radio-button-group/radio";

class TopInfoBar extends Component {
  state = {
    filterSelect: "Date",
    local: "Missouri",
    checked: "Date",
  };

  render() {
    const filter = ["Date", "Jurisdiction"];

    return (
      <div style={{ width: "1236px", marginLeft: "auto", marginRight: "auto" }}>
        <div class="slds-grid slds-gutters">
          <div class="slds-col slds-size_2-of-3">
            <article
              class="slds-card"
              style={{
                margin: "20px",
                float: "left",
                width: "814px",
                height: "256px",
              }}
            >
              <header class="slds-card__header">
                <h1
                  style={{
                    fontSize: "30px",
                    fontFamily: "Merriweather",
                    fontWeight: "bold",
                  }}
                >
                  Find local meetings and meeting minutes
                </h1>
              </header>
              <div class="slds-card__body slds-card__body_inner">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at porttitor sem. Aliquam erat volutpat. Donec
                  placerat nisl magna, et faucibus arcu condimentum sed.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                  porttitor sem. Aliquam erat volutpat. Donec placerat nisl
                  magna, et faucibus.
                </p>
                <footer>
                  <Button
                    class="slds-button slds-button_brand "
                    href="javascript:void(0);"
                    variant="outline-brand"
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      left: "15px",
                      margin: "15px",
                      fontSize: "12pt",
                    }}
                  >
                    Need more help?
                  </Button>
                </footer>
              </div>
            </article>
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
                onChange={(event) =>
                  this.setState({ checked: event.target.value })
                }
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
            </article>
          </div>

          <article
            class="slds-card slds-col slds-size_1-of-3"
            style={{
              float: "right",
              width: "339px",
              height: "367px",
              margin: "20px",
            }}
          >
            <header class="slds-card__header">
              <h1
                style={{
                  fontSize: "20px",
                  fontFamily: "Merriweather",
                  fontWeight: "bold",
                }}
              >
                Upcoming Meetings
              </h1>
            </header>
            <Calendar />
          </article>
        </div>

        <div class="slds-grid slds-wrap">
          <MeetingCard />
        </div>
      </div>
    );
  }
}

export default TopInfoBar;
