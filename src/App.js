import React from 'react';
import HomePage from './pages/HomePage';
import EditMoviePage from './pages/EditMoviePage';
import AddMoviePage from './pages/AddMoviePage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './assets/css/style.css';



function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/new" component={AddMoviePage} />
          <Route exact path="/edit/:id" component={EditMoviePage} />        
        </Switch>  
    </BrowserRouter>
  );
}

export default App;
