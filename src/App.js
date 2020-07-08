import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
//pages
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import AppContainer from './components/AppContainer';
import NotFound from './components/NotFound';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Header/> */}
        <Route path="/app"><AppHeader/></Route>
        <Route path="/"><Header/></Route>
      </Switch>

      <Switch>
        <Route path="/" exact><Homepage/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/signup"><Signup/></Route>

        <Route path="/app"><AppContainer/></Route>

        <Route path="/"><NotFound/></Route>
      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
