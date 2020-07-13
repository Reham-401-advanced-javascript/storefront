import React from 'react';
import Status from './components/status';
import Votes from './components/vote-counter';
function App() {
  return (
    <>
      <h1>Redux!</h1>
      <Votes />
      <Status />
    </>
  );
}

export default App;
