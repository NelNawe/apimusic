const Vote = require('../models/vote');
const VotingSession = require('../models/votingsession');


const Vote = require('../models/vote');
const VotingSession = require('../models/votingsession');

const vote = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { user_id, music_id, rating } = req.body;

    const newVote = new Vote({ user_id, music_id, rating, vote_date: new Date() });
    await newVote.save();

    res.status(201).json({ message: 'Vote submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getVoteResults = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const votes = await Vote.find({ music_id: { $in: req.body.musics }, vote_date: { $lt: new Date() } });

    // Calculate and return voting results
   

    res.json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { vote, getVoteResults };
