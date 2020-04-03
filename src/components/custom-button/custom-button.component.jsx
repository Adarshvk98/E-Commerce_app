import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isSignInGoogle,inverted, ...otherProps }) => (
  <button
    className={`custom-button ${isSignInGoogle ? "googleSignInBtn" : ""} ${inverted ? "inverted" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
