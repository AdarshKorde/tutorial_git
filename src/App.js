import React,{useEffect, useState} from 'react';
import { Switch, Route ,BrowserRouter} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Reddit from './components/Reddit';
import Youtube from './components/Youtube';
import Chooseapp from './components/Chooseapp';
import Twitter from './components/Twitter ';


function App() {
    
 
  return (
      
        <div className="App">
            <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={Dashboard}/>
                  <Route path='/chooseapp' component={Chooseapp}/>
                  <Route exact path='/reddit' component={Reddit}/>
                  <Route exact path='/youtube' component={Youtube}/>
                  <Route exact path='/twitter' componsent={Twitter}/>
                  
              </Switch>
            </BrowserRouter>
          </div>
        
      );
}

export default App;
