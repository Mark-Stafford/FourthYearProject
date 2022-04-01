import React, { useState } from 'react'
import './banner2.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner2() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
          
            <div className='banner__info'>
                
                
                <Button onClick={() => history.push('/search')} variant='outlined'>See Available Options</Button>
            </div>
        </div>
    )
}

export default Banner2
