import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// component imports 
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Breakfast from './components/Breakfast'
import Lunch from './components/Lunch'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Contact} />
          <Route exact path='/breakfast' component={Breakfast} />
          <Route exact path='/lunch' component={Lunch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
