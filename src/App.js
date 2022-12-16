import React, { useState } from 'react';

import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [paragraph, setParagraph] =useState(false);

  const toggleParagraphHandler = () => {
    setParagraph(prvParagraphState => !prvParagraphState);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {paragraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler} >Toggle Paragraph</Button>
    </div>
  );
}

export default App;
