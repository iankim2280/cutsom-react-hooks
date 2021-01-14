import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useConfirm = (message = "", onConfirm, onCancel) => {
  //   if (!onConfirm && typeof onConfirm !== "function") {
  //     return;
  //   }
  //   if (onCancel && typeof onCancel !== "function") {
  //     return;
  //   }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
export default function App() {
  const deleteWorld = () => console.log("Deleting the world!!!!");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <h1>confirm</h1>
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
}
