import React, {Component} from 'react';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';

import reactLogo from './assets/React-icon.png';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <div className="container">
            <h1>Template file</h1>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
