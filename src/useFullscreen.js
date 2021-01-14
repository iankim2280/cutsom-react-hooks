import React, {useState, useEffect, useRef, useCallback} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useFullScreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    runCb(false);
  };
  return {element, triggerFull, exitFull};
};

export default function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const {element, triggerFull, exitFull} = useFullScreen(onFullS);
  return (
    <div className="App" style={{height: "1000vh"}}>
      <div ref={element}>
        <img src="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32582.png&w=350&h=254" />
        <br />
        <button onClick={exitFull}>Exit fullscreen</button>
        <button onClick={triggerFull}>Make fullscreen</button>
      </div>
    </div>
  );
}
