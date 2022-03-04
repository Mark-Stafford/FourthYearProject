

import React from 'react';


import Appbar from "../Appbar/Appbar";
import { useState } from "react";

const Accommodation = () => {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
      setSidebar(!sidebar);
    };
  
    return (
      <div className="profilelayout">
        {/* appbar */}
        <Appbar handleSidebar={handleSidebar} />
       
        
         
          
        
        
        
         
        
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          rerum blanditiis a quibusdam? Dolorum labore praesentium eius tenetur
          inventore corrupti distinctio assumenda accusantium, officia
          consequatur?
        </p>

           <p> hello welcome to Accommodation</p>
         
        <div>
        </div>
        </div>
      
      

      
    );
  };
  

export default Accommodation;