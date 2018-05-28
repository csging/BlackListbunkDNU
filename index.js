const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport')
var keys = require('./config/keys.js');
var bodyParser = require('body-parser') 
require('./models/user.js')
require('./services/passport.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use (
    cookieSession ({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());  

require('./routes/authRoutes.js')(app);
require('./routes/listRoutes.js')(app);

app.get('/', (req,res) => {
    res.send({hi: 'there'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT)