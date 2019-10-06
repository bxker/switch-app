require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const server = require('http').createServer(app);
const sockets = require('socket.io');
const io = sockets(server);

//controllers
const {getUser, register, login, logout} = require('./controllers/authController.js');
const {updateUsername, updateStreamTitle, addTwitchUsername, updateTwitchUsername, updateFavoriteColor, deleteUser} = require('./controllers/settingsController');
const {getStreams, getCurrentStream} = require('./controllers/streamsController');

//dotenv
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

//middleware
app.use(express.json());
app.use( express.static( `${__dirname}/../build` ) );


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
//add twitch username
app.post('/auth/settings/twitch', addTwitchUsername);
//update twitch username
app.put('/auth/settings/twitch', updateTwitchUsername);
//update favorite color
app.put('/auth/settings/color', updateFavoriteColor)
//delete account
app.delete('/auth/settings/user', deleteUser);

//api endpoints
app.get('/api/streams', getStreams);
app.get('/api/stream/:username', getCurrentStream);


//sockets
let messages = [];

io.on("connection", socket => {

    socket.emit("onConnection", {
        message: "Sockets has been connected"
    })
    

    socket.on("messageSend", data => {
        const {username, message, profile} = data;
        let profileIndex = messages.findIndex(val => val.profile === profile); 
        
        if(profileIndex === -1) {
            messages.push({
                profile,
                messages: []
            })
            profileIndex = messages.length - 1;
        } 
        messages[profileIndex].messages.push({
            username,
            message
        }); 

        io.emit("newMessage", {
            profile,
            messages: messages[profileIndex].messages
        })
    })
})

server.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}.`));