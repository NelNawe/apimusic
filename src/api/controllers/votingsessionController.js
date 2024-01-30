const VotingSession = require('../models/votingsession');

const VotingSession = require('../models/votingsession');

const createSession = async (req, res) => {
  try {
    const { module_name, expiration_date, musics } = req.body;

    const newSession = new VotingSession({ module_name, expiration_date, musics });
    await newSession.save();

    res.status(201).json({ message: 'Voting session created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSession = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const votingSession = await VotingSession.findById(sessionId);

    res.json({ votingSession });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createSession, getSession };

