/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useCallback, useState } from "react";

const Test = ({ handle }) => {
  console.log(handle);
  return "smd";
};

const TestingComponent = () => {
  const [s, setS] = useState(1);
  const handle = useCallback(() => {
    console.log("sms");
  });
  return (
    <div>
      <Test handle={handle} />
      <button onClick={() => setS(s + 1)}>click me</button>
    </div>
  );
};

export default TestingComponent;

// import React, { Suspense, useMemo, useState } from "react";
// import { useWidth } from "./hooks";

// const Meme = React.lazy(() => import("./MemoUse"));

// const MemoUse = ({ count }) => {
//   const cachedCount = useMemo(() => count.value, [count.value]);
//   console.log(count.value, "fjsdkl");
//   return <div>{cachedCount}</div>;
// };

// const Promise = () => {
//   const [count, setCount] = useState(0);
//   const width = useWidth(45);
//   return (
//     <div>
//       {width}
//       {/* <MemoUse count={{ value: 4 }} /> */}
//       <Suspense fallback={<div>Loading...</div>}>
//         <Meme />
//       </Suspense>{" "}
//       <button onClick={() => setCount(count + 1)}>add</button>
//     </div>
//   );
// };

// export default Promise;
