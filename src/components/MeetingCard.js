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
      <footer class="slds-card__footer">View All Info Button</footer>
    </article>
  );
};

export default MeetingCard;
