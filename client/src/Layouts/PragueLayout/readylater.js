import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import Appbar from "../../components/Appbar/Appbar";
import { useState } from "react";
import SearchResult from "./SearchResult";

function SearchPage() {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
      setSidebar(!sidebar);
    };
  
  
   
  
    return (
      <div className="profilelayout888">
        {/* appbar */}
        <Appbar handleSidebar={handleSidebar} />
        {/* sidebar */}
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august 2 guest</p>
                <h1>Stays Now Available</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of Prague"
                title="Stay at this spacious Apartment"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="€20 / night"
                total="€500 Month"
            />

            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in center of Amsterdam"
                title="Spacious apartment just for students"
                description="3 guest · 3 bedroom · 2 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="€20 / night"
                total="€500 Month"
            />

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

export default SearchPage
