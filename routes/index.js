const express =require('express')
const router = express.Router()
const {ensureAuthenticated} = require('../config/auth')



router.get('/', (req,res)=> res.render('base',{layout:'layout'}))
router.get('/welcome', (req,res)=> res.render('welcome'))
router.get('/fluke', (req,res)=> res.render('fluke',{layout: 'layout'}))
router.get('/search-view', (req,res)=> res.render('search-view',{layout: 'layout'}))

router.get('/newly-added', (req,res)=> res.render('newly-added',{layout: 'layoutLogin'}))


// Dashboard 
router.get('/dashboard', ensureAuthenticated ,(req,res)=> res.render('dashboard',{ 
   layout: 'layout'
}))


module.exports = router