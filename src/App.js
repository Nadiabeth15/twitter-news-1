import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Entertainment from "./pages/Entertainment";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/entretenimiento" component={Entertainment} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
