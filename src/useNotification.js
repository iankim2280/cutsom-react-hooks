import React, {useState, useEffect, useRef, useCallback} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// this function is not a hook, try it on a chrome browser
const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

export default function App() {
  const triggerNotif = useNotification("Hello buddy?!", {
    body: "Good, I love kimchi",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}
