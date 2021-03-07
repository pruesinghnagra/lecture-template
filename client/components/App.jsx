import React from 'react'
import { Route } from "react-router-dom";

import Nav from './Nav'
import Demo from './Demo';
import Slides from './SlideDeck';

function App () {
  return (
    <main>
      <Nav />
      <div>
        <Route path='/slides' component={Slides} />
        <Route path='/demo' component={Demo} />
      </div>
    </main>
  )
}

export default App
