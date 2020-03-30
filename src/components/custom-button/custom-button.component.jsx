import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isSignInGoogle, ...otherProps }) => (
  <button
    className={`custom-button ${isSignInGoogle ? "googleSignInBtn" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
