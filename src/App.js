import React, { useCallback, useState } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [paragraph, setParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App Running!");

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle){
      setParagraph(prvParagraphState => !prvParagraphState);

    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };


  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={paragraph} />
      <Button onClick={allowToggleHandler} >Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler} >Toggle Paragraph</Button>
    </div>
  );
}

export default App;
