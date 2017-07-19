//importing modules
const express = require('express');

//routing can be done using router
const router =express.Router();

//middleware that will be used to log dates for these routes
router.use(function timelog(req,res,next) {
   console.log('Time is:' + Date());
   next();
});

//define home page route
router.get('/',function (req,res) {
    res.send('This is default page');
});

//define page2 route
router.get('/page2',function (req,res) {
    res.send('This is page 2');
});

module.exports =router;