//importing modules
const express = require('express');
const route = require('./route');

//create an instance of express to run express on top of node
const app = express();

//load route modules
app.use(route);

// server port listen on 3000
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});