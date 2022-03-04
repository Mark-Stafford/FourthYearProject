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
              <Link to='/' className='nav-links'>
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/accommodation' className='nav-links'>
                Accommodation
              </Link>
            </li>
  
            
        </div>
        {/* avatar */}
        <div className="appbar_avatar">
          <p></p>
          <Avatar />
          
          <BiMenuAltLeft onClick={handleSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
