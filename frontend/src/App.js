import './App.css';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Logup from './pages/Logup';
import NavigationBar from './components/NavigationBar';
import Signin from './components/Signin';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavigationBar></NavigationBar>
        <div className="grid">
          <div className="first">
            Red Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            blanditiis repellendus ipsam! Ipsum, iusto repudiandae velit accusantium
            odit adipisci provident dolor saepe illo quidem reiciendis omnis
            quisquam quibusdam repellendus ad, dolores sint similique architecto
            voluptate aut? Omnis hic enim dolorem, natus iure atque nihil expedita
            voluptatibus aut explicabo inventore eveniet eaque recusandae laborum
            deleniti dignissimos, eum iusto impedit, voluptatum ea temporibus illo
            assumenda tenetur. Consequuntur necessitatibus nam reprehenderit aut
            expedita beatae vel laboriosam recusandae quibusdam accusantium facere
            distinctio, assumenda labore ex incid
        </div>
          <div className="second">
            Red Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            blanditiis repellendus ipsam! Ipsum, iusto repudiandae velit accusantium
            odit adipisci provident dolor saepe illo quidem reiciendis omnis
            quisquam quibusdam repellendus ad, dolores sint similique architecto
            voluptate aut? Omnis hic enim dolorem, natus iure atque nihil expedita
            voluptatibus aut explicabo inventore eveniet eaque recusandae laborum
            deleniti dignissimos, eum iusto impedit, voluptatum ea temporibus illo
            assumenda tenetur. Consequuntur necessitatibus nam reprehenderit aut
            expedita beatae vel laboriosam recusandae quibusdam accusantium facere
            distinctio, assumenda labore ex incid
            Red Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            blanditiis repellendus ipsam! Ipsum, iusto repudiandae velit accusantium
            odit adipisci provident dolor saepe illo quidem reiciendis omnis
            quisquam quibusdam repellendus ad, dolores sint similique architecto
            voluptate aut? Omnis hic enim dolorem, natus iure atque nihil expedita
            voluptatibus aut explicabo inventore eveniet eaque recusandae laborum
            deleniti dignissimos, eum iusto impedit, voluptatum ea temporibus illo
            assumenda tenetur. Consequuntur necessitatibus nam reprehenderit aut
            expedita beatae vel laboriosam recusandae quibusdam accusantium facere
            distinctio, assumenda labore ex incid
            Red Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            blanditiis repellendus ipsam! Ipsum, iusto repudiandae velit accusantium
            odit adipisci provident dolor saepe illo quidem reiciendis omnis
            quisquam quibusdam repellendus ad, dolores sint similique architecto
            voluptate aut? Omnis hic enim dolorem, natus iure atque nihil expedita
            voluptatibus aut explicabo inventore eveniet eaque recusandae laborum
            deleniti dignissimos, eum iusto impedit, voluptatum ea temporibus illo
            assumenda tenetur. Consequuntur necessitatibus nam reprehenderit aut
            expedita beatae vel laboriosam recusandae quibusdam accusantium facere
            distinctio, assumenda labore ex incid   Red Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            blanditiis repellendus ipsam! Ipsum, iusto repudiandae velit accusantium
            odit adipisci provident dolor saepe illo quidem reiciendis omnis
            quisquam quibusdam repellendus ad, dolores sint similique architecto
            voluptate aut? Omnis hic enim dolorem, natus iure atque nihil expedita
            voluptatibus aut explicabo inventore eveniet eaque recusandae laborum
            deleniti dignissimos, eum iusto impedit, voluptatum ea temporibus illo
            assumenda tenetur. Consequuntur necessitatibus nam reprehenderit aut
            expedita beatae vel laboriosam recusandae q   Red Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            blanditiis repellendus ipsam! Ipsum, iusto repudiandae velit accusantium
            odit adipisci provident dolor saepe illo quidem reiciendis omnis
            quisquam quibusdam repellendus ad, dolores sint similique architecto
            voluptate aut? Omnis hic enim dolorem, natus iure atque nihil expedita
            voluptatibus aut explicabo inventore eveniet eaque recusandae laborum
            deleniti dignissimos, eum iusto impedit, voluptatum ea temporibus illo
            assumenda tenetur. Consequuntur necessitatibus nam reprehenderit aut
            expedita beatae vel laboriosam recusandae quibusdam accusantium facere
            distinctio, assumenda labore ex inciduibusdam accusantium facere
            distinctio, assumenda labore ex incid
        </div>
          <Signin className='signin'></Signin>
          <div className='weather'>
            voluptate aut? Omnis hic enim dolorem, natus iure atque nihil expedita
            voluptatibus aut explicabo inventore eveniet eaque recusandae laborum     voluptate aut? Omnis hic enim dolorem, natus iure atque nihil expedita
            voluptatibus aut explicabo inventore eveniet eaque recusandae laborum
           </div>
        </div>
        <Route path='/login' component={Login}></Route>
        <Route path='/logup' component={Logup}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
