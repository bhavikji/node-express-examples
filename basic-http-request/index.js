// import modules
const express = require('express');

//create an instance of express to run express on top of node
const app = express();

//basic requests in express

//get request

app.get('/get', function(req, res) {
    res.send("Bhavik is using GET request for requesting!");
});

//post request

app.post('/post',function (req, res) {
    res.send('Bhavik is using POST request for requesting!');
});

// put request

app.put('/put', function (req,res) {
    res.send('Bhavik is using PUT request for requesting');
});

//delete request

app.delete('/delete',function (req,res) {
    res.send('Bhavik is using DELETE request for requesting')
});

//patch request

app.patch('/patch',function (req, res) {
    res.send('Bhavik is using PATCH request for requesting');
});

//server info
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});