import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
            <Route path="/" exact strict component={Login} />
            <Route path="/dashboard/:username" render={
              ({match})=> (
                  <Dashboard username={match.params.username} />
              )          
            } />
        </div>
      </Router>
    );
  }  
}

export default App;
