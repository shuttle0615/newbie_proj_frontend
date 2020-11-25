import react from 'react';
import './App.css';
import Main from './main.js';
import Gameplay from './gameplay.js';
import scoreboard from './scoreboard.js';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import CreateUser from './createUser';

function App() {

  return (
    
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' exact component = {Main} /> 
          <Route path='/createUser' exact component = {CreateUser} />    
          <Route path='/scoreboard' exact component = {scoreboard} />
          <Route path='/gameplay'exact component = {Gameplay} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
