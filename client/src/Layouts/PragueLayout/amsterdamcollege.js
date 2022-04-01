import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import Appbar from "../../components/Appbar/Appbar";
import { useState } from "react";
import SearchResult from "./SearchResult";

function amsterdamcollege() {
    
  
   
  
    return (
      <div className="profilelayout888">
        {/* appbar */}
        <Appbar/>
        {/* sidebar */}
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august 2 guest</p>
                <h1>Now Available In Amsterdam</h1>
                
            </div>
            
           
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Student room in Amsterdam"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="€20 / night"
                total="€500 Month"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private room for student in center of Prague"
                title="The Blue Room In London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="€40 / night"
                total="€800 Month"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Student apartment in center of Amsterdam"
                title="Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="€30 / night"
                total="€700 Month"
            />
        </div>
        </div>
    )
}

export default amsterdamcollege
