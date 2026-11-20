// Loads Express - Osa
var express = require('express');


// Creates the Express application - Osa
var app = express();


// Sets the location of the EJS files - Osa
app.set(
    'views',
    './views'
);


// Tells Express to use EJS - Osa
app.set(
    'view engine',
    'ejs'
);


// Allows the website to use files in public - Osa
app.use(
    express.static('./public')
);


// Displays the Dashboard - Osa
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


// Displays the Create Assignment page - Osa
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


// Starts the server - Osa
app.listen(
    3000
);


// Shows the server address in the terminal - Osa
console.log(
    'Server running at http://localhost:3000/'
);


// Makes the application available - Osa
module.exports = app;