const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

// import db from config
const db = require('./config/mongoose');
// use express layout as a function 
app.use(expressLayouts);

// call assets folder and file
app.use(express.static('./assets'));

// extract style and script from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        // console.log('Error: ', err);
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);

});