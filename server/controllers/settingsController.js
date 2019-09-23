const updateUsername = async (req, res) => {
    const db = req.app.get('db');
    const {username} = req.body;
    const {user_id} = req.session.user;
    try {
        const updatedUser = await db.settings.updateUsername(username, user_id);
        res.status(200).json(updatedUser[0]);
    }
    catch{
        res.status(409).json('Username taken!')
    }
}

const updateStreamTitle = async (req, res) => {
    const db = req.app.get('db');
    const {stream_title} = req.body;
    const {user_id} = req.session.user;
    const updatedUser = await db.settings.updateStreamTitle(stream_title, user_id);
    res.status(200).json(updatedUser[0]);
}

const addTwitchUsername = async (req, res) => {
    const db = req.app.get('db');
    const {twitch_username} = req.body;
    const {user_id} = req.session.user;
    const updatedUser = await db.settings.addTwitchUsername(twitch_username, user_id);
    res.status(200).json(updatedUser[0]);
}

const updateTwitchUsername = async (req, res) => {
    const db = req.app.get('db');
    const {twitch_username} = req.body;
    const {user_id} = req.session.user;
    const updatedUser = await db.settings.updateTwitchUsername(twitch_username, user_id);
    res.status(200).json(updatedUser[0]);
}

const updateFavoriteColor = async (req, res) => {
    const db = req.app.get('db');
    const {favorite_color} = req.body;
    const {user_id} = req.session.user;
    const updatedUser = await db.settings.updateFavoriteColor(favorite_color, user_id);
    res.status(200).json(updatedUser[0]);
}

const deleteUser = async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.session.user;
    await db.settings.deleteUser(user_id);
    res.sendStatus(200);
}

module.exports = {
    updateUsername,
    updateStreamTitle,
    updateTwitchUsername,
    updateFavoriteColor,
    deleteUser,
    addTwitchUsername
}