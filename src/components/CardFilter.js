import React from "react";
import MeetingCard from "./MeetingCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Button from "@salesforce/design-system-react/components/button";

const CardFilter = () => {
  const state = {
    filterSelect: "Region",
    local: "Missouri",
  };

  return (
    <div style={{ width: "1236px", marginLeft: "auto", marginRight: "auto" }}>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
            faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
            volutpat. Donec placerat nisl magna, et faucibus.
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
        class="slds-card"
        style={{
          float: "right",
          width: "339px",
          height: "364px",
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
      <article
        class="slds-card"
        style={{ margin: "20px", float: "left", width: "814px" }}
      >
        Sort Meetings By
      </article>

      <MeetingCard />
    </div>
  );
};

export default CardFilter;
