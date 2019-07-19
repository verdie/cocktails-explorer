import React from 'react';
import './App.css';
import CocktailsListContainer from './components/CocktailsListContainer';
import { Route } from 'react-router-dom'
import CocktailDetailsContainer from './components/CocktailDetailsContainer'



function App() {
  return (
    <div className="App">
     <main>
       <Route exact path="/" component={CocktailsListContainer} />
       <Route exact path="/cocktails/:id" component={CocktailDetailsContainer} />
     </main>
    </div>
  );
}

export default App;
