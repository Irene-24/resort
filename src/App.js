import React from 'react';
import "./App.module.css";

import Error from "./components/Error";
import Rooms from "./components/Rooms";
import Home from "./components/Home";
import SingleRoom from "./containers/SingleRoom";

function App() {
  return (
  <React.Fragment>
    <Home />
    <Rooms />
    <SingleRoom />
    <Error />
  </React.Fragment>
  );
}

export default App;
