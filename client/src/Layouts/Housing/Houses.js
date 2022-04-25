import React, {useEffect, useState} from 'react';
import '../App.css';
import './Houses.css';
import axios from "axios";
import { toast } from "react-toastify";
import Appbar from '../../components/Appbar/Appbar';
import PayPal from "../../components/PayPal";
import { Link } from 'react-router-dom';





const Houses = (props) => {
  useEffect( () => {
      fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [checkout, setCheckOut] = useState(false);

  
  const handleChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  


  const deleteItems = async (e) => {
    e.preventDefault();
    // check field
  
      const res = await axios.post("/houses/delete", {

        
        
        
      });
      toast(res.data.msg, {
        className: "toast-success",
        bodyClassName: "toast-success",
      });
    }

    const deleteTodo = async (e, id) => {
      try {
        e.stopPropagation();
        await axios.post("/houses/delete");
        setItems(items.filter(({ _id: i }) => id !== i));
      } catch (err) {}
    };


  const fetchItems = async () => {
      const data = await fetch('/addings');
      const items = await data.json();
      setItems(items);
  };

 

  return (
    
    <>
     <div className="profilelayout888">
<Appbar />

<br></br>
<br></br>

    <div align="center">
      <div className="tble123">

      
        <table>

        <tr>
        <th>User ID</th>

          <th>Description</th>
          <th>City </th>
          <th>Rooms</th>
          <th>RoomType</th>
          <th> Country</th>
          <th>Image</th>

        </tr>

        {
      items.map(item => (
        <>
        <tr>

        <td>{item.user}</td>
        
        <td>{item.description}</td>
          <td>{item.city} </td>
          <td>{item.rooms} </td>
          <td>{item.roomtype} </td>
          <td>{item.country} </td>

          
          <td><a href={item.imagerep} target="_parent">
        
        <button
          className='butns1'
          buttonStyle='butn--primary'
          buttonSize='butn--large'
          onClick={console.log('hey')}
        >
          Photo <i className='far fa-play-circle' />
          
        </button>
        </a> </td>
          
        

        
      {checkout ? (
        <PayPal />
        
        
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
           
           
          Pay Deposit 
        </button>
         
      )}
       <Link to = "/pal"> </Link>
    </tr>
  </>
  ))
}
        </table>


                </div>
                </div>

</div>
  </>
  )
}

export default Houses;

