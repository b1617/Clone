import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Logup from './pages/Logup';
import NavigationBar from './components/NavigationBar';
import Code from './pages/Code';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path='/' component={Code}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/logup' component={Logup}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
