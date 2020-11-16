import React from 'react'
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore'
import People from './components/people/People';
import Planets from './components/planets/planets';

import Starships from './components/StarShips/Starships';

const App = () => {
   
  
  return (
    <div className='App'>
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/Explore' component={Explore}/>
         <Route exact path='/People' component={People}/>
         <Route exact path='/Planet' component={Planets}/>
         <Route exact path='/starship' component={Starships}/>
       </Switch>
    </div>
  )

}

export default App;
