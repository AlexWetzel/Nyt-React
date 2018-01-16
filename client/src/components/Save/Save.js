import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Save = props => (
  <button type="button" className="btn btn-primary" {...props} >Save</button>
);

export default Save;