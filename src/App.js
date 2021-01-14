import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./components/CreateUsers";
import NavBar from "./components/navbar";
import ShowUsers from "./components/ShowUsers";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/add" component={Form} />
        <Route exact path="/users" component={ShowUsers} />
      </Switch>
    </Router>
  );
}

export default App;
