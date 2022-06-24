import React from 'react';
import { 
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import ContactUs from './components/ContactUs';
import Flights from './components/flights/Flights';
import LandingPage from './components/LandingPage';
import Login from './components/auths/Login';
import NotFound from './components/NotFound';
import PageFooter from './components/PageFooter';
import Register from './components/auths/Register';
import TopMenu from './components/TopMenu';
import UserData from './components/UserData';
import Users from './components/users/Users';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FlightData from './components/customers/FlightsData';


function App() {
  return (
    <Router>
      <div>
      <ToastContainer />
      <TopMenu />
        <Switch>
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/flights" exact component={Flights} />
          <Route path="/users" exact component={Users} />
          <Route path="/user-data" exact component={UserData} />
          <Route path="/not-found" exact component={NotFound} />
          <Route path="/flight-data" exact component={FlightData} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={LandingPage} />
          <Redirect to="/" />
        </Switch>
      <PageFooter />
      </div>
    </Router>
  );
}

export default App;
