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
import Userpage from './components/Userpage';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Switch>
        <Route path="/" exact><Homepage/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/signup"><Signup/></Route>
        <Route path="/userpage"><Userpage/></Route>

        <Route path="/"><NotFound/></Route>
      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
