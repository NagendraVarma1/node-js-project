const Meeting = require('../model/meeting')

exports.addMeeting = async(req, res, next) => {
    try{
        console.log('getting into addMeeting')
        console.log(req.body)
        const name = req.body.name;
        const mail = req.body.mail;
        const time = req.body.time

        const data = await Meeting.create({
            name: name,
            mail: mail,
            time: time
        })
        res.status(200).json({newMeetingDetials: data})
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

exports.getAllMeetings = (req, res, next) => {
    Meeting.findAll()
    .then((data) => {
        res.status(200).json({allMeetingDetails: data})
    })
    .catch((err) => {
        res.status(500).json({error: err})
    })

}

exports.deleteMeeting = async(req, res, next) => {
    try{
        const meetingId = req.params.id;

        await Meeting.destroy({
            where: {
                id: meetingId
            }
        })
        res.sendStatus(200)
    }
    catch(err) {
        res.status(500).json({error: err})
    }
}
