import {BrowserRouter, Route} from "react-router-dom";
import React,  {Component} from 'react';
import TodoList from './Todolist2';
import Calendar from './Calendar';
// import Header from './Header.js';
import Home from './Homepage.js';
import Landing from './Landing.js';
import Navbar from './Navbar';
import About from './About';
import Fab from './Fab';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     props.isAuthenticated === true
//     ? <Component {...props} />
//     : <Redirect to='/dashboard' />
//   )} /> 
// )  //need to use PrivateRoute for the authenticated route. commented out so i can do testing on the ui

class App extends Component {
  
  render() {
    return (
      
        <div className = "container">
        <div>
          <Navbar />
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home} /> 
              <Route exact path="/dashboard" component={Landing} /> 
              <Route path="/lists" component={TodoList} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/about" component={About} />
            </div>
          </BrowserRouter>
        </div>
        <Fab align="right"/>
       </div> 
    )
  }
}

export default App;
