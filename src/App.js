import React, { useCallback, useState } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [paragraph, setParagraph] = useState(false);

  console.log("App Running!");

  const toggleParagraphHandler = useCallback(() => {
    setParagraph(prvParagraphState => !prvParagraphState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler} >Toggle Paragraph</Button>
    </div>
  );
}

export default App;
