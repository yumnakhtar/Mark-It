import React from "react";

export const InputEmail = props => (
    <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="user-email"  placeholder="Enter email" {...props}/>
    
  </div>
)