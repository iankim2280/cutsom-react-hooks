import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const {current} = element;
      current.style.transition = `opacity ${duration}s linear ${delay}`;
      current.style.opacity = 1;
    }
  });
  return {ref: element, style: {opacity: 0}};
};
export default function App() {
  const fadeInH1 = useFadeIn(2, 2);
  const fadeInP = useFadeIn(10, 3);
  return (
    <div className="App">
      <h1 {...fadeInH1}>HELLO</h1>
      <p {...fadeInP}>lorem ipsum</p>
    </div>
  );
}
