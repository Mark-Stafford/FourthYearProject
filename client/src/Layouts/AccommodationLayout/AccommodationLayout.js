import Profile from "../../components/Profile/Profile";
import Feed from "../../components/Feed/Feed";
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';


import Appbar from "../../components/Appbar/Appbar";
import "./AccommodationLayout.css";
import { useState } from "react";


import Sidebar from "../../components/Sidebar/Sidebar"




import Card from './Card'
import React from 'react';
import './Home.css';
import Banner from './Banner'


const AccommodationLayout = () => {
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
      <Banner />

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="New ways for students to study"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Explore Aswell As Study"
                description="Adventure to Amsterdam and Beyond."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Spacious Rooms"
                description="Comfortable private rooms made just for students."
            />
            </div>
            <div className='home__section'>
         
            
            
            </div>
        </div>
    

     

  </div>

        


        
        
        
        
         
        
      

  );
};

export default AccommodationLayout;

