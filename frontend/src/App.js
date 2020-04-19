import './App.css';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Logup from './pages/Logup';
import NavigationBar from './components/NavigationBar';
import Code from './pages/Code';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavigationBar></NavigationBar>
        <Code></Code>
        <Route path='/login' component={Login}></Route>
        <Route path='/logup' component={Logup}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
