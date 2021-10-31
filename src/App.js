
import Home from './Components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Placeorder from './Components/Placeorder/Placeorder';
import Mybooking from './Components/Mybooking/Mybooking';
import Login from './Components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Privateroute from './Components/Login/Privateroute/Privateroute';
import Header from './Components/Header/Header';
import Manageorder from './Components/Manageorder/Manageorder';
import Addservices from './Components/Addservices/Addservices';


function App() {
  return (
   <AuthProvider>
      <Router>
        <Header></Header>

<Switch>

  <Route exact path="/">

    <Home></Home>

  </Route>

  <Route path="/home">
    <Home></Home>
  </Route>

  <Privateroute path="/order/:orderid">
   <Placeorder></Placeorder>
  </Privateroute>

  <Route path="/login">
    <Login></Login>
  </Route>

  <Privateroute path="/booking">
   <Mybooking></Mybooking>
  </Privateroute>

  <Privateroute path="/manageorder">
    <Manageorder></Manageorder>
  </Privateroute>

  <Privateroute path="/addservices">
    <Addservices></Addservices>
  </Privateroute>


  
</Switch>
</Router>
   </AuthProvider>


  );
}

export default App;
