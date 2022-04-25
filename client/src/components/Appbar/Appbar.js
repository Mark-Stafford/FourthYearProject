import { BiMenuAltLeft } from "react-icons/bi";
import Avatar from "../Avatar/Avatar";
import "./appbar.css";
import { Link } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";


const Appbar = ({ handleSidebar }) => {
  const { dispatch } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/api/auth/signout");
      localStorage.removeItem("_appSignging");
      dispatch({ type: "SIGNOUT" });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick2 = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/api/auth/signout");
      localStorage.removeItem("_appSignging");
      dispatch({ type: "SIGNOUT" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="appbar">
      <div className="appbar_wrapper">
        {/* logo */}
        <div className="appbar_logo">
          
          <p>UniAccomm</p>
          <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/adding' className='nav-links'>
                Add
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/search' className='nav-links'>
                Accommodation
              </Link>
              </li>

              
            
        </div>
        {/* avatar */}
        <div className="appbar_avatar">
        <li className='nav-item' onClick={handleClick2}>

          <Avatar onClick={handleClick2} />
          </li>
          <BiMenuAltLeft onClick={handleSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
