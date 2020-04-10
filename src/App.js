import React from 'react';
import { Switch,Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Error from "./components/Error";
import Rooms from "./components/Rooms";
import Home from "./components/Home";
import SingleRoom from "./containers/SingleRoom";

function App() {
  return (
  <React.Fragment>
    <NavBar />
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/rooms" component={Rooms} />
     <Route exact path="/rooms/:id" component={SingleRoom} />
     <Route component={Error} />
    </Switch>
  </React.Fragment>
  );
}

export default App;
