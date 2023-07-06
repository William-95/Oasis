import {Suspense} from "react";
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
import NavSwitch from "./components/NavSwitch";
import Footer from "./components/Footer";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
function App() {
  return (
    <Suspense fallback={null}>
      <I18nextProvider i18n={i18n}>
      <SetContext>
        <NavSwitch />
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
      </I18nextProvider>
    </Suspense>
  );
}

export default App;
