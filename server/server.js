const userRoutes = require("./routes/userRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routesHandler = require('./routes/addingRoutes');
const express = require("express");
const app = express();

const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require("./routes/router");
const users = require("./models/userSchema");
const articlesRouter = require("./routes/articles");
const usersRouter = require('./routes/users');
require('dotenv').config();


// db
mongoose.connect(
  process.env.MONGO_URL,
  {

    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,

  },
)
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
// mw
app.use(express.json());
// express.urlencoded({ extended: true });
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());
//hello h


const path = require('path');
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "client/build", "index.html"));
  });
}

// routes
app.use(userRoutes);
app.use(uploadRoutes);
app.use('/', routesHandler);
app.use('/users', usersRouter);



app.use("/articles", articlesRouter);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



