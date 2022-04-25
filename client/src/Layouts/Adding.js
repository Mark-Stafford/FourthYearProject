import '../App.css';
import Imagerep from "../components/Imagerep/Imagerep";
import { Link } from 'react-router-dom';
import { AiFillCamera } from "react-icons/ai";
import { useContext, useRef, useState } from "react";
import { isEmpty } from "../components/helper/validate";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../components/Input2/Input2";
import Appbar from '../components/Appbar/Appbar';
import Map from './geolocated';



const initialState = {
    description: "",
    city: "",
    rooms: "",
    roomtype: "",
    country: "",
    
  };

function Adding() {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(initialState);
    const loca = useContext(Map);

    const { description, city, rooms, roomtype, country} = data;


    const inputFile = useRef(null);
    const [imagerep, setImagerep] = useState(false);
 
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => {
      setSidebar(!sidebar);
    };
  
    const handleInput = () => {
      inputFile.current.click();
    };

  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };

  
    const send = async (e) => {
      e.preventDefault();
      // check fields
      if (isEmpty(description) || isEmpty(city) || isEmpty(rooms) || isEmpty(roomtype) || isEmpty(country))
        return toast("Please fill in all fields.", {
          className: "toast-failed",
          bodyClassName: "toast-failed",
        });
     

      try {
        const res = await axios.post("/addAdding", {
          imagerep,
          description,
          city,
          rooms,
          roomtype,
          country,
          user: localStorage.getItem("currentUser")
          
        });
        toast(res.data.msg, {
          className: "toast-success",
          bodyClassName: "toast-success",
        });
      } catch (err) {
        toast(err.response.data.msg, {
          className: "toast-failed",
          bodyClassName: "toast-failed",
        });
      }
      handleReset();
    };
    const changeImage = async (e) => {
      e.preventDefault();
      try {
        // get file
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("imagerep", file);
  
        // upload to cloudinary
        const res = await axios.post("/api/upload", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
          onUploadProgress: (x) => {
            if (x.total < 1024000)
              return toast("Uploading", {
                className: "bg-upload",
                bodyClassName: "bg-upload",
                autoClose: 7000,
              });
          },
        });
        setImagerep(res.data.url);
      } catch (err) {
        toast(err.response.data.msg, {
          className: "toast-failed",
          bodyClassName: "toast-failed",
        });
      }
    };

  
    const handleReset = () => {
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
      setData({ ...data, description: "", city: "" , rooms: "", roomtype: "", country: ""});
    };
  
    return (
      <>
         <div className="profilelayout888">
   {/* appbar */}
   <Appbar/>
        {/* sidebar */}
    

      <div className="reportss">
        <div className="gggg">
        <form onSubmit={send}>
        <div className="profile_imagerep">
          <div className="profile_imagerep-wrapper" onClick={handleInput}>
            <Imagerep imagerep={imagerep} />
            <AiFillCamera />
          </div>
          <input
            type="file"
            name="imagerep"
            ref={inputFile}
            className="profile_imagerep-input"
            onChange={changeImage}
          />
        </div>
          
          <Input
            type="text"
            text="Description"
            name="description"
            handleChange={handleChange}
          />
                    <Input
            type="text"
            text="City"
            name="city"
            handleChange={handleChange}
          />

<Input
            type="text"
            text="Rooms"
            name="rooms"
            handleChange={handleChange}
          />
          <Input
            type="text"
            text="Roomtype"
            name="roomtype"
            handleChange={handleChange}
          />

<Input
            type="text"
            text="Country"
            name="country"
            handleChange={handleChange}
          />




<br />
            <button type="submit">Add Room</button>
          
        </form>

</div>
</div>

<div>
  </div>
</div>      </>
    );
  };

export default Adding;
