import './App.css';
import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Dashboard from './views/Dashboard';
import NewPirate from './views/NewPirate';
import OnePirate from './views/OnePirate';

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <h3>Ye Pirate Crew Database, Matey</h3>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route exact path="/pirates/new">
            <NewPirate />
          </Route>

          <Route exact path="/pirates/:id">
            <OnePirate />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
