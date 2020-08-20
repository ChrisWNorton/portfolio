import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import NavBar from './pages/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/1projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
