// Loads the Express module
var express = require('express');


// Creates the Express application
var app = express();


// Sets the location of the EJS files
app.set(
    'views',
    './views'
);


// Tells Express to use EJS
app.set(
    'view engine',
    'ejs'
);


// Allows the website to use files in public
app.use(
    express.static('./public')
);


// Displays the Dashboard
app.get(
    '/',
    function(req, res) {

        res.render(
            'index',
            {
                title: 'TrackIt Dashboard'
            }
        );

    }
);


// Displays the Create Assignment page
app.get(
    '/create',
    function(req, res) {

        res.render(
            'create',
            {
                title: 'Create Assignment'
            }
        );

    }
);


// Starts the server
app.listen(
    3000
);


console.log(
    'Server running at http://localhost:3000/'
);


// Makes the application available
module.exports = app;