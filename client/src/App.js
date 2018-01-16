import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from './pages/Saved';
import Home from './pages/Home';
import Nav from './components/Nav';

//TODO:
const App = () =>

      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>;

export default App;
