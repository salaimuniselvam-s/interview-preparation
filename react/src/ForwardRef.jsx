/* eslint-disable react/prop-types */
import React from "react";

const ForwardRef = React.forwardRef(function Forward({ sms }, ref) {
  console.log(sms, ref, "ForwardRef");
  return (
    <div>
      <input type="text" ref={ref} />
      {sms}
    </div>
  );
});

export default ForwardRef;
