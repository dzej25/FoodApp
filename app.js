// const express = require('express');
// const expresssLayouts = require('express-ejs-layouts')
// const mongoose = require('mongoose')
// const flash = require('connect-flash')
// const session = require('express-session')
// const passport = require('passport')

// const app = express() 

// // Passport config 
// require('./config/passport')(passport)


// // DB config 
// const db = require('./config/keys').MongoURI;


// //Connect to Mongo
// mongoose.connect(db, { useNewUrlParser: true,
//    useUnifiedTopology: true
// })

// .then(()=> console.log('MongoDB Connectted'))
// .catch(err=> console.log(err))

// // EJS

// app.use(expresssLayouts)
// app.set('view engine', 'ejs')

// // Bodyparser 
// app.use(express.urlencoded({extended: false}))

// // Express Session
// app.use(session({ 
//    secret: 'secret',
//    resave: false,
//    saveUninitialized: true,
// })) 

// // Passport middleware

// app.use(passport.initialize())
// app.use(passport.session())

// // Connect flash 
// app.use(flash())

// // Globalsa Vars

// app.use((req,res,next)=>{ 
//       res.locals.success_msg = req.flash('success_msg')
//       res.locals.error_msg = req.flash('error_msg')
//       res.locals.error = req.flash('error')
//       next()
// })


//  // Routing
// app.use('/', require('./routes/index.js'))

// app.use('/users', require('./routes/users.js'))



// const PORT = process.env.PORT || 7001
// app.listen(PORT, console.log(`SERVER STARTER ON PORT ${PORT}`))
