const getStreams = (req, res) => {
    const db = req.app.get('db');
    const streams = db.streams.getStreams();
    res.status(200).json(streams);
}

const getCurrentStream = (req, res) => {
    const db = req.app.get('db');
}

module.exports = {
    getStreams,
    getCurrentStream
}