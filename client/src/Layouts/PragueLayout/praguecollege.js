import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import Appbar from "../../components/Appbar/Appbar";
import { useState } from "react";
import SearchResult from "./SearchResult";

function praguecollege() {
    
  
   
  
    return (
      <div className="profilelayout888">
        {/* appbar */}
        <Appbar/>
        {/* sidebar */}
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august 2 guest</p>
                <h1>Now Available In Prague</h1>
              
            </div>
            
         

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of Prague City"
                title="Studio Apartment"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Washing Machine"
                star={3.8}
                price="€20 / night"
                total="€500 Month"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room in center of Amsterdam"
                title="Lovely rooms in the heart of the city"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="€20 / night"
                total="€500 Month"
            />
            
        </div>
        </div>
    )
}

export default praguecollege
