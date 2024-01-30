const express = require('express');
const router = express.Router();
const MusicController = require('../controllers/musicController');

router.post('/submit-music/:sessionId', MusicController.submitMusic);
router.get('/get-musics/:sessionId', MusicController.getMusics);

module.exports = router;
