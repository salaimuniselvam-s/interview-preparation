import React from "react";

const ForwardRef = React.forwardRef(function Comp(props, ref) {
  console.log({ ref });
  return (
    <div>
      <input ref={ref} />
    </div>
  );
});

export default ForwardRef;
