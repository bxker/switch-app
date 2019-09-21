require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');

//controllers
const {getUser, register, login, logout} = require('./controllers/authController.js');
const {updateUsername, updateStreamTitle, updateTwitchUsername, deleteUser} = require('./controllers/settingsController');
//dotenv
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

//middleware
app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*60*60*24*7
    }
}))

//database connection
massive(CONNECTION_STRING)
.then((db) => {
    app.set('db', db);
    console.log('Database Connected :D')
})

//auth endpoints
app.get('/auth/user', getUser)
app.post('/auth/register', register)
app.post('/auth/login', login)
app.post('/auth/logout', logout)

//update username
app.put('/auth/settings/user', updateUsername);
//update stream title
app.put('/auth/settings/streamtitle', updateStreamTitle);
//update twitch username
app.put('/auth/settings/twitch', updateTwitchUsername);
//delete account
app.delete('/auth/settings/user', deleteUser);

//api endpoints

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))