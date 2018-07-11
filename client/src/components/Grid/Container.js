import React from "react";
import "./container.css";





export const Container = ({ fluid, children }) => (

  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>

);
