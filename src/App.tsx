import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </Router>
    </div>
  );
}

export default App;
