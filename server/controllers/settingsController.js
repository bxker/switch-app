const updateUsername = async (req, res) => {
    const db = req.app.get('db');
    const {username} = req.body;
    const {user_id} = req.session.user;
    try {
        await db.settings.updateUsername(username, user_id);
        res.sendStatus(200);
    }
    catch{
        res.status(409).json('Username taken!')
    }
}

const updateStreamTitle = async (req, res) => {
    const db = req.app.get('db');
    const {stream_title} = req.body;
    const {user_id} = req.session.user;
    await db.settings.updateStreamTitle(stream_title, user_id);
    res.sendStatus(200)
}

const updateTwitchUsername = (req, res) => {
    const db = req.app.get('db');
}
const deleteUser = (req, res) => {
    const db = req.app.get('db');
}

module.exports = {
    updateUsername,
    updateStreamTitle,
    updateTwitchUsername,
    deleteUser
}