/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import ForwardRef from "./ForwardRef.jsx";
import NoForwardRef from "./NoForwardRef";
import PromiseComponent from "./saturday/Promise";

const Forwarded = () => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div>
      <ForwardRef sms={"sms"} ref={ref} />
      <NoForwardRef sms={"sms"} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PromiseComponent />
  </React.StrictMode>
);
