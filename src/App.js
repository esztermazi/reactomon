import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
      </Router>
    </React.Fragment>
  );
}

export default App;
