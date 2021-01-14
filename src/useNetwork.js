import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useNetwork = (onChange) => {
  // navigator.online checks if you're online or not
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
export default function App() {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      {/* it will be changed to offline when you click offline on the network section in the console. */}
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
}
