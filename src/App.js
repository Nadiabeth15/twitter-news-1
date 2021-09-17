import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./pages/News";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={News} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
