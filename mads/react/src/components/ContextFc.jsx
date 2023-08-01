import React, { useContext } from "react";
import { CountContext } from "../App";

const ContextFc = React.memo(function AddedAdmin({ isAdmin }) {
  const { setCount } = useContext(CountContext);
  return (
    <div>
      {isAdmin}
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
});

export default ContextFc;
