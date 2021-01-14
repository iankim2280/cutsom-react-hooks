import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useHover = (onHover) => {
  // if (typeof onClick !== "function") {
  //   return false;
  // }
  const element = useRef();
  useEffect(() => {
    // when useEffect is componentDidMount, do this once (componentDidMount, componentDidUpdate)
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    // return a function, when the componentWillUnMount called
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
    // there's no dependency, so it happend anytime
  }, []);
  return element;
};

export default function App() {
  const alert = () => {
    console.log("alert");
  };
  const paragraph = useHover(alert);

  return (
    <div className="App">
      <p ref={paragraph}>hi</p>
    </div>
  );
}
