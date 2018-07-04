import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const LoginBtn = props => (
  <button className="delete-btn" {...props}>
    Login
  </button>
);

export default LoginBtn;