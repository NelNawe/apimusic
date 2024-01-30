const express = require('express');
const router = express.Router();
const VotingSessionController = require('../controllers/votingsessionController');

router.post('/create-session', VotingSessionController.createSession);
router.get('/get-session/:sessionId', VotingSessionController.getSession);

module.exports = router;
