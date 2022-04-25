
const Adding = require("../models/userAdding");
const User = require("../models/userModel");


const addingController = {
  adding: async (req, res) => {

        const userDescription = req.body.description;
        const userImagerep = req.body.imagerep;
        const userCity = req.body.city;
        const userRooms = req.body.rooms;
        const roomtype = req.body.roomtype
        const country = req.body.country
      
        const user = req.body.user;

      // const rf_token = createToken.access({ id: user._id });
      // res.cookie("_apprftoken", rf_token, {
      //   httpOnly: true,
      //   path: "/api/auth/access",
      //   maxAge: 24 * 60 * 60 * 1000, // 24h
      // });
        
        const newAdding = new Adding({
          description: userDescription,
          imagerep: userImagerep,
          city : userCity,
          rooms: userRooms,
          roomtype: roomtype,
          country: country,
          user : user
        
          
        });



        console.log(newAdding);

        
        try {
            await newAdding.save( (err, newAddingResults) => {
                if (err) res.end('Error Saving.');
                res.redirect('/houses');
                res.end();
            });
    
        } catch(err) {
            console.log(err);
            res.end();
        }
  
  },


  

  addinginfo: async (req, res) => {

    const userAddings = await Adding.find({},  (err, addingData) => {
        if (err) throw err;
        if (addingData) {
            res.end(JSON.stringify(addingData));
        } else {
            res.end();
        }
    });
  },
}

module.exports = addingController;