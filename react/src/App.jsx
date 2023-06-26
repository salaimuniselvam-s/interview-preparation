import "./App.css";

function App() {
  const data = { name: "John", age: 42 };

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default App;
