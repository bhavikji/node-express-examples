// import modules
const express = require('express');

//create an instance of express to run express on top of node
const app = express();

app.get('/',function (req, res){
    res.send("hello world from bhavik");
});

//server info
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});