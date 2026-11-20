/*
TrackIt Assignment Tracker

*/


// Loads Express
var express = require('express');


// Creates the Express application
var app = express();


// Tells Express where the EJS files are stored
app.set(
    'views',
    './views'
);


// Tells Express to use EJS
app.set(
    'view engine',
    'ejs'
);


// Makes the public folder available
app.use(
    express.static('./public')
);


/*
Dashboard Route
*/

app.get(
    '/',
    function(req, res) {

        res.render(
            'index',
            {

                title:
                    'TrackIt Dashboard'

            }
        );

    }
);


/*
Create Assignment Page

The form functionality will be added
in the next project version.
*/

app.get(
    '/create',
    function(req, res) {

        res.render(
            'create',
            {

                title:
                    'Create Assignment'

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
module.exports =
    app;