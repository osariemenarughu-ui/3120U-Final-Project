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


// Displays the All Assignments page - Zaki
app.get(
    '/assignments',
    function(req, res) {

        res.render(
            'assignments',
            {
                title: 'My Assignments'
            }
        );

    }
);


// Displays the Edit Assignment page - Joseph
app.get(
    '/edit',
    function(req, res) {

        res.render(
            'edit',
            {
                title: 'Edit Assignment',
                id: req.query.id
            }
        );

    }
);


// Uses Render's port or 3000 when running locally
var PORT =
    process.env.PORT || 3000;


// Starts the server
app.listen(
    PORT,
    '0.0.0.0'
);


// Shows the server address
console.log(
    'Server running on port ' + PORT
);


// Makes the application available
module.exports = app;