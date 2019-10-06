const bcrypt = require('bcryptjs');

const getUser = async (req, res) => {
    const db = req.app.get('db');
    const {username} = req.query;
    const {user_id} = req.session.user;
    
    if(username !== 'null'){
        const updatedUser = await db.auth.updateUsername(username, user_id);
        const foundUserTwitchStream = await db.streams.checkTwitchandTitle();
        req.session.user = {
            first_name: updatedUser[0].first_name,
            last_name: updatedUser[0].last_name,
            email: updatedUser[0].email,
            user_id: updatedUser[0].user_id,
            username: updatedUser[0].username,
            favorite_color: updatedUser[0].favorite_color,
            twitch_username: foundUserTwitchStream[0].twitch_username,
            stream_title: foundUserTwitchStream[0].stream_title
        }
            res.status(200).json(req.session.user);
        }else{
            res.status(200).json(req.session.user);
        }
    
}


const register = async (req, res) => {
    const db = req.app.get('db');
    const {username, password, first_name, last_name, email, favorite_color} = req.body;

    const foundUser = await db.auth.checkForUsername(username);

    if(foundUser[0]){
        res.status(409).json('Username Taken')
    }else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.auth.registerUser(first_name, last_name, email, favorite_color, username, hash);
        req.session.user = {
            first_name: newUser[0].first_name,
            last_name: newUser[0].last_name,
            email: newUser[0].email,
            user_id: newUser[0].user_id,
            username: newUser[0].username,
            favorite_color: newUser[0].favorite_color
        };
        
        res.status(200).json(req.session.user);
    }

}
const login = async (req, res) => {
    const db = req.app.get('db');
    const {username, password} = req.body;

    const foundUser = await db.auth.checkForUsername(username);
    const foundUserTwitchStream = await db.streams.checkTwitchandTitle();

    if(!foundUser[0]){
        res.status(403).json('Username or Password incorrect')
    }else{
        const isAuthenticated = bcrypt.compareSync(password, foundUser[0].hash)

        if(!isAuthenticated){
            res.status(403).json('Username or Password Incorrect')
        }else {
            req.session.user = {
                first_name: foundUser[0].first_name,
                last_name: foundUser[0].last_name,
                email: foundUser[0].email,
                user_id: foundUser[0].user_id,
                username: foundUser[0].username,
                favorite_color: foundUser[0].favorite_color,
                twitch_username: foundUserTwitchStream[0].twitch_username,
                stream_title: foundUserTwitchStream[0].stream_title
            }
            res.status(200).json(req.session.user);
        }
    }
}
const logout = (req, res) => {
    req.session.destroy();
    res.status(200).json('logged out successfully');
}

module.exports = {
    getUser,
    register,
    login,
    logout
}