import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    className={`${size} menu-item`}
  >
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="bg-image"
    />
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
