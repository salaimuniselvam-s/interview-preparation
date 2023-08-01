import React, { useCallback, useState } from "react";

const Memoized = React.memo(function Sms({ sms, sv }) {
  console.log(sms, sv());
  return <div>{sms.sms}</div>;
});
const Memo = () => {
  const [count, setCount] = useState(0);
  const sms = React.useMemo(() => ({ sms: "count" }), []);

  const sv = useCallback(() => {
    console.log("sv");
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Memoized sms={sms} sv={sv} />
    </div>
  );
};

export default Memo;
