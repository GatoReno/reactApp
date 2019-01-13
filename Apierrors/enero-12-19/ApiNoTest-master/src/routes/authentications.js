//rutas de login


const express = require('express');
const router = express.Router();

const passport = require('passport');
const pool = require('../../db');


router.post('/signin', (req,res,next) => {

    passport.authenticate('local.signin',{
        successRedirect : '/profile',
        failureRedirect: '/signin',
        failureFlash : true
    })(req,res,next);
});


router.get('/signup', (req,res) => {

    res.render('auth/signup');
});


router.post('/signup', passport.authenticate('local.signup',{
    successRedirect: '/profile',
    failureRedirect : '/signup',
    failureFlash : true
}));

router.get('/profile',(req,res)=>{
    res.send('your porfile');
    
});

router.get('/signin', (req,res) => {
    res.render('auth/signin');
});


module.exports = router;