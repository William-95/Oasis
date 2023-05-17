import React from "react";
import "./css/App.css";
import { Route, Switch } from "react-router-dom";
import SetContext from "./SetContext";
import EntryPoint from "./pages/EntryPoint";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import List from "./pages/List";
import SingleDog from "./pages/SingleDog";
import InsertDog from "./pages/InsertDog";
import FindLostDog from "./pages/FindLostDog";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SetContext>
        <Navbar />

        <Switch>
          <Route exact path="/" component={EntryPoint} />
          <Route path="/home/:id/" component={Home} />
          <Route path="/profile/:id/" component={Profile} />
          <Route path="/list/" component={List} />
          <Route path="/singledog/:id_dog/" component={SingleDog} />
          <Route path="/insertdog/" component={InsertDog} />
          <Route path="/findlostdog/" component={FindLostDog} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </SetContext>
    </>
  );
}

export default App;
