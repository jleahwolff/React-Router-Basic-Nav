import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
  <Route path="/about">
    <About />
  </Route>

  </div>
);

export default App;
