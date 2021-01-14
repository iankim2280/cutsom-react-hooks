import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useClick = (onClick) => {
  // if (typeof onClick !== "function") {
  //   return false;
  // }
  const element = useRef();
  useEffect(() => {
    // when useEffect is componentDidMount, do this once (componentDidMount, componentDidUpdate)
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // return a function, when the componentWillUnMount called
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
    // there's no dependency, so it happend anytime
  }, []);
  return element;
};

export default function App() {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
    </div>
  );
}
