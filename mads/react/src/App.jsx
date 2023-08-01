import React, { Suspense, useRef, useState } from "react";
import "./App.css";
import ContextFc from "./components/ContextFc";
import RenderProps from "./components/RenderProps";
import WithHoc from "./components/Hoc";
import ForwardRef from "./components/ForwardRef";

export const CountContext = React.createContext(null);
const ContextFCs = WithHoc(ContextFc);

const Memo = React.lazy(() => import("./components/Memo"));

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CountContext.Provider value={{ setCount }}>
        {count % 2 === 0 ? <Memo /> : null}
        <h1>{count}</h1>
        <ContextFCs />
        <RenderProps render={(a) => <h1>{a}</h1>} />
        <ForwardRef ref={ref} />
        <button onClick={() => ref.current.focus()}>Focus</button>
      </CountContext.Provider>
    </Suspense>
  );
}

export default App;
