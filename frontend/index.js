function addNewMeeting(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mail = document.getElementById('mail').value;

    const meetingDetials = {
        name, 
        mail
    }

    showMeetings(meetingDetials)
}

function showMeetings(meeting) {
    let div = document.getElementById('scheduledMeetings');

    let card = document.createElement('div');
    let person = document.createElement('h3')
    let link = document.createElement('p');

    person.textContent = `Hi ${meeting.name}`
    link.textContent = `Please join the meeting`
}