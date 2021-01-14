import React, {useState, useEffect} from "react";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
    console.log("title changed");
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("home"), 1000);
  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}
