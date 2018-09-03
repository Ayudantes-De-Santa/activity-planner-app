import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ActivityList from './components/activity-list/activity-list';
import ActivityInfo from './components/activity-info/activity-info';

import './styles/activity-info.css';


class App extends Component {
  render() {
    return (
       <ul class="event-list">
        <ActivityInfo />
         <ActivityInfo />
         </ul>
     

    //     <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>


    );
  }
}

export default App;
