import Profile from "../components/Profile/Profile";
import Feed from "../components/Feed/Feed";
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


import Appbar from "../components/Appbar/Appbar";
import "./AccommodationLayout.css";
import { useState } from "react";


import Sidebar from "../components/Sidebar/Sidebar"




import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'
import React from 'react';
import './Home.css';
import Banner2 from './banner2'
import './banner2.css';


const SearchPage = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };


 

  return (
    <div className="profilelayout888">
      {/* appbar */}
      <Appbar handleSidebar={handleSidebar} />
      {/* sidebar */}

      <div className='home'>
        
        <br></br>
       
        
            <div className='home__section'>
            <Card2
                src="https://res.cloudinary.com/dmj4cnn5j/image/upload/v1648726206/aaaa_xhg0li.webp"
                title="University of Valencia"
                description="Spain"
                
            />
            
            <Card
                src="https://res.cloudinary.com/dmj4cnn5j/image/upload/v1648726100/prague_new_jwllnm.jpg"
                title="University of Prague"
                description="Prague"
            />
            <Card3
                src="https://res.cloudinary.com/dmj4cnn5j/image/upload/v1648725958/amsterdam_new_mllgqp.jpg"
                title="Utrect University "
                description="Amsterdam"
            />


            </div>
            <div className='home__section'>
           
            </div>
        </div>
    

     

  </div>

        


        
        
        
        
         
        
      

  );
};

export default SearchPage;

