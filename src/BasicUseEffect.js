import React, {useState, useEffect} from "react";
import "./styles.css";

export default function App() {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  // this is ComponentDidMount, componentWillUnMount, ComponentDidUpdate
  // useEffect(sayHello);

  // activate when number is changed,componentWillUpdate
  useEffect(sayHello, [number]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}
