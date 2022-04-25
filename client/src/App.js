import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ActivateLayout from "./Layouts/ActivateLayout/ActivateLayout";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";
import AuthLayout2 from "./Layouts2/AuthLayout2/AuthLayout";
import ProfileLayout2 from "./Layouts2/ProfileLayout2/ProfileLayout";
import ResetLayout from "./Layouts/ResetLayout/ResetLayout";
import { AuthContext } from "./context/AuthContext";
import { AuthContext2 } from "./context/AuthContext2";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Accommodation from './Layouts/AccommodationLayout/AccommodationLayout';
import Prague from './Layouts/PragueLayout/PragueLayout';
import Amsterdam from './Layouts/AmsterdamLayout/AmsterdamLayout';
import SearchPage from './Layouts/SearchPage';
import Adding from './Layouts/Adding';
import Houses from './Layouts/Housing/Houses';
import Map from './Layouts/geolocated';
import praguecollege from "./Layouts/PragueLayout/praguecollege";
import valencia from "./Layouts/PragueLayout/valencia";
import amsterdamcollege from "./Layouts/PragueLayout/amsterdamcollege";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Layouts/Footer";
import Paypage from "./components/paypage";
import Paypal from "./components/PayPal";





function App() {
  const { dispatch, token, isLoggedIn } = useContext(AuthContext);
  const { dispatch2, token2, isLoggedIn2 } = useContext(AuthContext2);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/articles")
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
  }, []);
  
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
  }, [dispatch, isLoggedIn, isLoggedIn2]);

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

  useEffect(() => {
    if (token2) {
      const getUser2 = async () => {
        dispatch2({ type: "SIGNING" });
        const res = await axios.get("/api/auth2/user2", {
          headers: { Authorization: token2 },
        });
        dispatch2({ type: "GET_USER", payload: res.data });
      };
      getUser2();
    }
  }, [dispatch2, token2]);



  return (
    <Router>
      <Switch>
      <Route path='/maps' component={isLoggedIn ? Map : AuthLayout} />

      <Route path='/adding' exact component={Adding} />
      <Route path='/houses' component={Houses} />
        <Route path="/" exact component={isLoggedIn ? ProfileLayout : AuthLayout}
        />

<Route path="/2" exact component={isLoggedIn ? ProfileLayout2 : AuthLayout2}
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
           component={isLoggedIn2 ? valencia: AuthLayout2}/>
          
          <Route path="/amsterdamcollege" 
           component={isLoggedIn ? amsterdamcollege: AuthLayout}/>

<Route path="/checkout" 
           component={isLoggedIn ? Paypage: AuthLayout}/>

<Route path="/pal" 
           component={isLoggedIn ? Paypal: AuthLayout}/>




      </Switch>
    </Router>
  );
}

export default App;
