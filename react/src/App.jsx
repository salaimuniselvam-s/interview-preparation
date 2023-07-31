/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { memo, useState, useMemo } from "react";
import Svs from "./Hoc";

const MyMemoizedComponent = memo(function MyMemoizedComponent({ message }) {
  console.log("MyMemoizedComponent", message);
  return <div>{message.details}</div>;
});

const RenderingLogic = ({ render }) => {
  return <div>{render("5")}</div>;
};

const RenderProps = () => {
  const [memo, setMemo] = useState({ details: "I am a memoized component" });

  const memoizedMessage = useMemo(() => memo, [memo]);

  return (
    <div>
      <Svs sms="sdfk" />
      {/* RenderProps -{" "}
      <RenderingLogic
        render={(data) => {
          return <h1> I am being rendered by render props {data}</h1>;
        }}
      />
      <button onClick={() => setMemo({ details: "I am a memoized component" })}>
        Memo
      </button>
      Pure Component
      <MyMemoizedComponent message={memoizedMessage} /> */}
    </div>
  );
};

export default RenderProps;
