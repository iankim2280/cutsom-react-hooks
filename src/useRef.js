import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default function App() {
  const input = useRef();
  // setTimeout(() => input.current.focus(), 1000);
  return (
    <div className="App">
      <h1>hi</h1>
      <input ref={input} placeholder="la" />
    </div>
  );
}
