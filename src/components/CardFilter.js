import React from "react";
import MeetingCard from "./MeetingCard";

import Button from "@salesforce/design-system-react/components/button";

const CardFilter = () => {
  return (
    <div style={{ width: "1236px", marginLeft: "auto", marginRight: "auto" }}>
      <article class="slds-card" style={{ margin: "20px" }}>
        <header class="slds-card__header">
          <h1>Find local meetings and meeting minutes</h1>
        </header>
        <div class="slds-card__body slds-card__body_inner">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
            faucibus arcu condimentum sed.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
            volutpat. Donec placerat nisl magna, et faucibus.
          </p>
        </div>
        <footer class="slds-card__footer">
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
      </article>
      <article class="slds-card" style={{ margin: "20px" }}>
        Sort Meetings By
      </article>
      <MeetingCard />
    </div>
  );
};

export default CardFilter;
