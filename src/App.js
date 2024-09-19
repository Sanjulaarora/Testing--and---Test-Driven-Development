import Login from "./components/Login";

function App() {
  const a = 30;
  const b = 22;
  return (
    <div className='head'>
      <Login />
      <h1>Hello World</h1>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
      <h2>Hey</h2>
      <span title="sum">{a+b}</span>
    </div>
  );
}

export default App;
