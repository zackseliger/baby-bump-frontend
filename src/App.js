import React from 'react';
import Header from './components/Header';
import AppHeader from './components/AppHeader';
import ProviderHeader from './components/ProviderHeader';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
//pages
import Homepage from './components/pages/Homepage';
import LearnMore from './components/pages/LearnMore';
import Login from './components/pages/Login';
import ProviderLogin from './components/pages/ProviderLogin';
import Signup from './components/pages/Signup';
import AppContainer from './components/pages/AppContainer';
import ProviderContainer from './components/pages/ProviderContainer';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app" component={() => <AppHeader/>}/>
        <Route path="/provider" component={() => <ProviderHeader/>}/>
        <Route path="/"><Header/></Route>
      </Switch>

      <Switch>
        <Route path="/" exact><Homepage/></Route>
        <Route path="/learnmore"><LearnMore/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/login2"><ProviderLogin/></Route>
        <Route path="/signup"><Signup/></Route>

        <Route path="/app"><AppContainer/></Route>
        <Route path="/provider"><ProviderContainer/></Route>

        <Route path="/"><NotFound/></Route>
      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
