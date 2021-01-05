import React, { Component } from "react";
import MeetingCard from "./MeetingCard";
import CardFilter from "./CardFilter";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Button from "@salesforce/design-system-react/components/button";

class TopInfoBar extends Component {
  render() {
    return (
      <div style={{ width: "1236px", marginLeft: "auto", marginRight: "auto" }}>
        <div className="slds-grid slds-gutters">
          <div className="slds-col slds-size_2-of-3">
            <article
              className="slds-card"
              style={{
                margin: "20px",
                float: "left",
                width: "800px",
                height: "226px",
              }}
            >
              <header className="slds-card__header">
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
              <div className="slds-card__body slds-card__body_inner">
                <p style={{ fontSize: "14px", textAlign: "left" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at porttitor sem. Aliquam erat volutpat. Donec
                  placerat nisl magna, et faucibus arcu condimentum sed.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                  porttitor sem. Aliquam erat volutpat. Donec placerat nisl
                  magna, et faucibus.
                </p>
                <footer>
                  <Button
                    className="slds-button slds-button_brand "
                    href="javascript:void(0);"
                    variant="outline-brand"
                    style={{
                      color: "blue",
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
            <CardFilter />
          </div>

          <article
            className="slds-card slds-col slds-size_1-of-3"
            style={{
              float: "right",
              width: "339px",
              height: "347px",
              margin: "20px",
            }}
          >
            <header className="slds-card__header">
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
            <Calendar calendarType="US" />
          </article>
        </div>

        <div className="slds-grid slds-wrap">
          <MeetingCard />
        </div>
      </div>
    );
  }
}

export default TopInfoBar;
