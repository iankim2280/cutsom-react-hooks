import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  // beforeunload allows open function before you close the window
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return {enablePrevent, disablePrevent};
};
export default function App() {
  const {enablePrevent, disablePrevent} = usePreventLeave();
  return (
    <div className="App">
      <h1>confirm</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}
