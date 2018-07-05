import React from "react";

export const InputPassword = props => (
    <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" id="user-pw"  placeholder="Password" {...props}/>
    
  </div>
)