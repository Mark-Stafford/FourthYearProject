import { BiMenuAltLeft } from "react-icons/bi";
import Avatar from "../Avatar/Avatar";
import "./appbar.css";
import { Link } from 'react-router-dom';


const Appbar = ({ handleSidebar }) => {
  return (
    <div className="appbar">
      <div className="appbar_wrapper">
        {/* logo */}
        <div className="appbar_logo">
          <img src="./assets/img/shuttle.svg" alt="logo" />
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
          <Avatar />
          <BiMenuAltLeft onClick={handleSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
