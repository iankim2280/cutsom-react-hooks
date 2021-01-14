const content = [
  {
    tab: "section 1",
    content: "1st content of the section 1",
  },
  {
    tab: "section 2",
    content: "2nd content of the section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  // if (!allTabs || !Array.isArray(allTabs)) {
  //   return;
  // }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const {currentItem, changeItem} = useTabs(1, content);
  return (
    <div className="App">
      <h1>Hello</h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
export default App;
