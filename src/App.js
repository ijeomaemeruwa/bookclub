import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { LandingPage } from './pages/LandingPage/LandingPage'
import { Books } from './pages/Books/Books'

const App = () => {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/"><LandingPage /></Route>
        <Route exact path="/books"><Books /></Route>
        {/* <Route path="/bookdetails/:id"><BookDetails/></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
