const getStreams = async (req, res) => {
    const db = req.app.get('db');
    const streams = await db.streams.getStreams();
    res.status(200).json(streams);
}

const getCurrentStream = async (req, res) => {
    const db = req.app.get('db');
    const {username} = req.params;
    const stream = await db.streams.getStream(username);
    console.log(stream[0])
    res.status(200).json(stream[0]);
}

module.exports = {
    getStreams,
    getCurrentStream
}