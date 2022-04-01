import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ActivateLayout from "./Layouts/ActivateLayout/ActivateLayout";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";
import ResetLayout from "./Layouts/ResetLayout/ResetLayout";
import { AuthContext } from "./context/AuthContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Accommodation from './Layouts/AccommodationLayout/AccommodationLayout';
import Prague from './Layouts/PragueLayout/PragueLayout';
import Amsterdam from './Layouts/AmsterdamLayout/AmsterdamLayout';
import SearchPage from './Layouts/PragueLayout/SearchPage';
import Adding from './Layouts/Adding';
import Houses from './Layouts/Housing/Houses';
import Map from './Layouts/geolocated';
import praguecollege from "./Layouts/PragueLayout/praguecollege";
import valencia from "./Layouts/PragueLayout/valencia";
import amsterdamcollege from "./Layouts/PragueLayout/amsterdamcollege";

import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';




function App() {
  const { dispatch, token, isLoggedIn } = useContext(AuthContext);
  
  // get ac token
  useEffect(() => {
    const _appSignging = localStorage.getItem("_appSignging");
    if (_appSignging) {
      const getToken = async () => {
        const res = await axios.post("/api/auth/access", null);
        dispatch({ type: "GET_TOKEN", payload: res.data.ac_token });
      };
      getToken();
    }
  }, [dispatch, isLoggedIn]);

  // get user data
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        dispatch({ type: "SIGNING" });
        const res = await axios.get("/api/auth/user", {
          headers: { Authorization: token },
        });
        dispatch({ type: "GET_USER", payload: res.data });
      };
      getUser();
    }
  }, [dispatch, token]);

  return (
    <Router>
      <Switch>
      <Route path='/maps' component={isLoggedIn ? Map : AuthLayout} />

      <Route path='/adding' exact component={Adding} />
      <Route path='/houses' component={Houses} />
        <Route path="/" exact component={isLoggedIn ? ProfileLayout : AuthLayout}
        />
        <Route
          path="/auth/reset-password/:token"
          exact
          component={ResetLayout}
        />
        <Route
          path="/api/auth/activate/:activation_token"
          exact
          component={ActivateLayout}
        />
        
        
        
          
          <Route path='/accommodation' 
          component={isLoggedIn ? Accommodation : AuthLayout} />

<Route path='/amsterdam' 
          component={Amsterdam} />

<Route path='/prague' 
          component={Prague} />

           <Route path="/search" 
           component={isLoggedIn ? SearchPage: AuthLayout}/>

<Route path="/praguecollege" 
           component={isLoggedIn ? praguecollege: AuthLayout}/>

<Route path="/valencia" 
           component={isLoggedIn ? valencia: AuthLayout}/>
          
          <Route path="/amsterdamcollege" 
           component={isLoggedIn ? amsterdamcollege: AuthLayout}/>
<Route exact path="/p" component={Home} />
      <Route exact path="/reg" component={Register} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/view/:id" component={Details} />




      </Switch>
    </Router>
  );
}

export default App;
