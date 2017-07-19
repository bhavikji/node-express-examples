//importing modules
const express = require('express');
const bodyParser = require('body-parser');

//create an instance of express to run express on top of node
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
//const textParser = bodyParser.text({text: 'text/html'});

//get request
app.get('/get',function (req,res) {
   res.send('This is a get request');
});

//match the /abc path
app.get('/abc',function (req,res) {
   res.send('This request will match /abc path.');
});

//match the /abc.txt path
app.get('/abc.txt',function (req,res) {
    res.send('This request is on abc.txt');
});

//matching string pattern requests

//match pattern like abd, abcd
app.get('/abc?d',function (req,res) {
   res.send('string pattern is: abc?d');
});

//match pattern like abbbd abcd
app.get('/ab+cd',function (req,res) {
    res.send('string pattern is: ab+cd');
});

//match pattern like bear, dear.pear. hear

app.get(/.*ear$/,function (req,res) {
    res.send('string pattern: /.*at/');
});

//for request like http://localhost:3000/users/oscar
//req will provide the get parameters
app.get('/users/:username', function (req, res) {
    res.send(req.params);
});

//for request like http://localhost:3000/users/oscar/age/23
//req will provide the get parameters
app.get('/users/:username/age/:age', function (req, res) {
    res.send(req.params);
});

//for request like http://localhost:3000/users/oscar/age/23/city/ahmedabad
//req will provide the get parameters
app.get('/users/:username/age/:age/city/:city', function (req,res) {
    res.send(req.params);
});

//for request like http://localhost:3000/users/oscar/age/23/city/ahmedabad but with different keywords
//req will provide the get parameters
app.get('/user/:username/age/:age/city/:city', function (req,res) {
    var x =req.params;
    var json = {
        "name" : x.username,
        "age" : x.age,
        "city" : x.city
    };
    res.send(json);
});

//for request like http://localhost:3000/users/oscar/age/23/city/ahmedabad but output will be in string.
//req will provide the get parameters
app.get('/string/users/:username/age/:age/city/:city', function (req, res) {
    var x =req.params;
    res.send(x.username + " is from " + x.city + " and he is  " +x.age + " years old");
});

//for chain routing
app.route('/chain')
    .get(function (req,res) {
        res.send('request from get using chain routing');
    }).post(function (req,res) {
        res.send('request from post using chain routing');
});

//for post request using form data

app.post('/postReq', urlencodedParser, function (req,res) {
    if (!req.body) return res.sendStatus(400);
    res.send('welcome, ' + req.body.username);
});
// server port listen on 3000
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});