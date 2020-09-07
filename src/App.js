import React from 'react';
import './App.css';
import TrollCounter from './components/trollcounter'
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <TrollCounter />
    </div>
  );
}

export default App;
