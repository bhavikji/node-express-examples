//importing modules
const express = require('express');
const path = require('path');

//create an instance of express to run express on top of node
const app = express();

//for middleware use app.use
//for static dir files use express default middleware here I'm serving app.css, index.html, img.jpg
app.use(express.static('assets'));
app.use(express.static('files'));
app.use('/virtual', express.static(path.join(__dirname, 'images')));

//get request
app.get('/',function (req,res) {

});
// server port listen on 3000
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});