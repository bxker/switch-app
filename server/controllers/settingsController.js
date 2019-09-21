const updateUsername = async (req, res) => {
    const db = req.app.get('db');
    const {username} = req.body;
    const {user_id} = req.session.user;
    await db.settings.updateUsername(username, user_id);
    res.sendStatus(200);
}
const updateStreamTitle = (req, res) => {
    const db = req.app.get('db');
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