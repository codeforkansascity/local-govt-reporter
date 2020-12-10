import React from "react";

const MeetingCard = () => {
  return (
    <article
      class="slds-card slds-col slds-size_1-of-2"
      style={{ height: "300px", width: "578px", float: "left", margin: "20px" }}
    >
      <header class="slds-card__header">
        <h2
          class="slds-card__header-title"
          style={{
            fontSize: "24px",
            paddingTop: "10px",
            paddingLeft: "15px",
            fontFamily: "Merriweather",
            fontWeight: "bold",
          }}
        >
          Kansas City, MO
        </h2>
      </header>
      <div class="slds-card__body slds-card__body_inner">
        {/*Left Body Div*/}
        <div
          style={{
            width: "50%",
            float: "left",
            textAlign: "left",
            paddingTop: "20px",
            paddingLeft: "15px",
          }}
        >
          <p style={{ fontSize: "10pt", paddingBottom: "5px" }}>Last Meeting</p>
          <p style={{ fontSize: "12pt", fontWeight: "bold" }}>Date Time</p>
          <p style={{ fontSize: "12pt", fontWeight: "bold" }}>Location</p>
          <p
            style={{ fontSize: "12pt", fontStyle: "italic", paddingTop: "5px" }}
          >
            Available Items
          </p>
        </div>
        {/*Right Body Div*/}
        <div
          style={{
            width: "50%",
            float: "right",
            textAlign: "left",
            paddingTop: "20px",
          }}
        >
          <p style={{ fontSize: "10pt", paddingBottom: "5px" }}>Next Meeting</p>
          <p style={{ fontSize: "12pt", fontWeight: "bold" }}>Date Time</p>
          <p style={{ fontSize: "12pt", fontWeight: "bold" }}>Location</p>
          <p
            style={{ fontSize: "12pt", fontStyle: "italic", paddingTop: "5px" }}
          >
            Available Items
          </p>
        </div>
      </div>
      <footer class="slds-card__footer">
        <a
          class="slds-button slds-button_brand "
          href="javascript:void(0);"
          style={{
            position: "absolute",
            bottom: "15px",
            left: "15px",
            margin: "15px",
            fontSize: "12pt",
          }}
        >
          View All Info For KCMO
        </a>
      </footer>
    </article>
  );
};

export default MeetingCard;
