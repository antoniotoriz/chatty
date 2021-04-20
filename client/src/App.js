import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Authentication from './views/authentication/Authentication';
import FourOFour from './views/four-o-four/FourOFour';
import Home from './views/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Authentication} />
        <Route path='/home/' component={Home} />
        <Route component={FourOFour} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
