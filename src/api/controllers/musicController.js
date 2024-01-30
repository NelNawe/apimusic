const Music = require('../models/music');
const VotingSession = require('../models/votingsession');


const Music = require('../models/music');
const VotingSession = require('../models/votingsession');

const submitMusic = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { title, artist } = req.body;

    const music = new Music({ title, artist });
    await music.save();

    const votingSession = await VotingSession.findById(sessionId);
    votingSession.musics.push(music._id);
    await votingSession.save();

    res.status(201).json({ message: 'Music submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getMusics = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const votingSession = await VotingSession.findById(sessionId).populate('musics');
    const musics = votingSession.musics;

    res.json({ musics });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { submitMusic, getMusics };
