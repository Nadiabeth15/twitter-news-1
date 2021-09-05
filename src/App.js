import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./pages/News";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={News} />
      </Switch>
    </Router>
  );
}

export default App;
