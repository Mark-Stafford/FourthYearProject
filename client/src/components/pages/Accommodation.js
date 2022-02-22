

import React from 'react';

import Feed from "../Feed/Feed";
import Sidebar from "../Sidebar/Sidebar";
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
        {/* sidebar */}
        <div
          className={
            sidebar ? "profilelayout_sidebar open" : "profilelayout_sidebar"
          }
        >
          <Sidebar />
        </div>
        {/* content */}
        <div className="profilelayout_content">
          {/* feed */}
          <div className="profilelayout_content-feed">
            <Feed />
          </div>
          {/* profile */}
         
        </div>
      </div>
    );
  };
  

export default Accommodation;