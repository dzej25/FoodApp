const express = require("express");
const morgan = require("morgan");
const sharp = require("sharp");
const { dbConnection } = require("./db");
const { upload } = require("./multer");
const { Img } = require("./models/index");
const expresssLayouts = require('express-ejs-layouts')
const session = require('express-session')
const flash = require('connect-flash')
const mongoose = require('mongoose') 
const fs = require('fs')
const bodyParser = require('body-parser')



const passport = require('passport')
require('./config/passport')(passport)

const Port = process.env.PORT || 7001;
const app = express();

app.set("view engine", "ejs");
app.use('/public', express.static('public'))
app.set('layout', 'layoutLogin')


// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({extended: true}));

app.use(flash())
app.use(session({ 
   secret: 'secret',
   resave: false,
   saveUninitialized: true,
})) 

app.use((req,res,next)=>{ 
   res.locals.success_msg = req.flash('success_msg')
   res.locals.error_msg = req.flash('error_msg')
   res.locals.error = req.flash('error')
   next()
})

// Express Session
app.use(session({ 
   secret: 'secret',
   resave: false,
   saveUninitialized: true,
})) 

app.use(passport.initialize())
app.use(passport.session())
app.use(expresssLayouts)


app.get("/", async (req, res) => {
   try {
     const files = await Img.find();
     const arrayfile= Array.from(files).slice(Math.max(files.length-3,0))
   
     res.render('base',{ arrayfile, layout: 'layout' });
   } catch (error) {
     console.log(error);
   }
   
 }); 
app.get('/newly-added',(req, res)=> {
   var arrayfile = [];
   Img.find({},(err, allData)=> {
       if (err) {
           console.log(err);
       } else {
           allData.forEach((data)=> {
               arrayfile.push(data);
           });
       }
       res.render('newly-added', { layout:'layout', arrayfile });
   });
});



app.post("/users/images", upload.any("images"), async (req, res) => {
  try {
    const imgFile = req.files[0].path;
    const { header, ingridient, prescribe } = req.body;

    const data = await sharp(imgFile).toFormat("jpeg").toBuffer();

    const  newPost = {
      header,
      ingridient,
      prescribe,
      images: { data }, 
      _id : new mongoose.Types.ObjectId()
    };
    await Img.create(newPost);
    req.flash('success_msg', 'You have uploaded your dish on the page! Congrats!')
    res.redirect("/users/images");
  } catch (error) {
    console.log(error);
  }
});  


app.use('/new-collection',(req,res)=>{ 
   
   
   
})


// Routing
app.use('/', require('./routes/index.js'))
app.use('/users', require('./routes/users.js'))


 



app.listen(Port, () => {
  dbConnection();
  console.log(`Server is listening on port: ${Port}`);
});
