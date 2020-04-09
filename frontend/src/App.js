import './App.css';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Logup from './pages/Logup';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavigationBar></NavigationBar>
        <Route path='/login' component={Login}></Route>
        <Route path='/logup' component={Logup}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
