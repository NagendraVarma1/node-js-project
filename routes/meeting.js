const express = require('express');

const router = express.Router();

const meetingController = require('../controllers/meeting');

router.post('/add-meeting', meetingController.addMeeting);

router.get('/get-meeting', meetingController.getAllMeetings);

router.delete('/delete-meeting/:id', meetingController.deleteMeeting)

module.exports = router