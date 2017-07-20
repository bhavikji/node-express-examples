//importing modules

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//creating a instance of express to run on top of nodejs
const app = express();

//for middleware use app.use
// to load static dir files using express default middleware
app.use(express.static('assets'));
app.use(express.static('files'));
app.use('/virtual',express.static(path.join(__dirname, 'images')));
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
/*app.set('view engine', 'pug');*/
app.set('view engine', 'handlebars');

app.get('/',function (req,res) {

});
app.get('/image',function (req,res) {
    res.sendFile(path.join(__dirname + '/files/image.html'));
});

app.get('/form',function (req,res) {
    res.sendFile(path.join(__dirname + '/files/form.html'));
});

app.post('/form/users', function (req,res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    res.render(__dirname + '/files/users', { title: 'handlebar', message: firstName + ' ' + lastName});
   console.log('This request is done by '+ firstName + ' ' + lastName);
});

// server port listen on 3000
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});