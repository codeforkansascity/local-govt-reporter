import React from "react";

const MeetingCard = () => {
  return (
    <article class="slds-card">
      <header class="slds-card__header">
        <h2 class="slds-card__header-title">Card Header</h2>
      </header>
      <div class="slds-card__body slds-card__body_inner">
        <div style={{ display: "inline-block" }}>This is in one div</div>
        <div style={{ display: "inline-block" }}>This is in the second div</div>
      </div>
      <footer class="slds-card__footer">
        <a class="slds-button slds-button_brand" href="javascript:void(0);">
          View All Info For KCMO
        </a>
      </footer>
    </article>
  );
};

export default MeetingCard;
