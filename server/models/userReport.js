const { Schema, model } = require("mongoose");


const reportSchema = new Schema({
    description: {type:String, required:true},
    imagerep: {
        type: String,
        default:
          "https://res.cloudinary.com/drkyd0zuy/image/upload/v1629902679/avatar/blank_avatar_eqtraf.png",
      },
  
      city:  {type:String, required:true},
      rooms:  {type:String, required:true},
      user: {type:Schema.Types.ObjectId, ref:'users'}
    

});



const Report = model('Report', reportSchema);



module.exports = Report;