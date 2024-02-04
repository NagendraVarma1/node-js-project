var form = document.getElementById('schedule-form')
let time;

function addNewMeeting(event){
    event.preventDefault();
    console.log('testing')
    form.style.visibility = 'hidden'

    const name = document.getElementById('name').value;
    const mail = document.getElementById('mail').value;

    const meetingDetials = {
        name, 
        mail
    }

    
    showMeetings(meetingDetials)

    document.getElementById('name').value = '';
    document.getElementById('mail').value = '';
}

function showMeetings(meeting) {
    let div = document.getElementById('scheduledMeetings');

    let card = document.createElement('div');
    let person = document.createElement('h3')
    let link = document.createElement('p');

    person.textContent = `Hi ${meeting.name}`
    link.textContent = `Please join the meeting at ${time}`

    card.appendChild(link);
    div.append(card)
}

function testing(t){
    time = t
    form.style.visibility = 'visible'
}