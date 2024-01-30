const express = require('express');
const router = express.Router();
const VoteController = require('../controllers/voteController');

router.post('/vote/:sessionId', VoteController.vote);
router.get('/get-vote-results/:sessionId', VoteController.getVoteResults);

module.exports = router;
