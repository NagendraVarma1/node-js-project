var form = document.getElementById("schedule-form");

let time;

let availableSlots1 = 4;
let availableSlots2 = 4;
let availableSlots3 = 4;
let availableSlots4 = 4;

let slot1 = document.getElementById('slots1')
let slot2 = document.getElementById('slots2')
let slot3 = document.getElementById('slots3')
let slot4 = document.getElementById('slots4')


let schedule1 = document.getElementById('schedule1');
let schedule2 = document.getElementById('schedule2');
let schedule3 = document.getElementById('schedule3');
let schedule4 = document.getElementById('schedule4');

slot1.innerText = availableSlots1
slot2.innerText = availableSlots2
slot3.innerText = availableSlots3
slot4.innerText = availableSlots4


function testing(t) {
  time = t;
  form.style.visibility = "visible";
}

function addNewMeeting(event) {
  event.preventDefault();
  form.style.visibility = "hidden";

  const name = document.getElementById("name").value;
  const mail = document.getElementById("mail").value;

  const meetingDetials = {
    name,
    mail,
    time
  };
  if(time === '2:00'){
    availableSlots1 = availableSlots1-1; 
    slot1.innerText = availableSlots1
  }
  else if(time === '2:30'){
    availableSlots2 = availableSlots2-1; 
    slot2.innerText = availableSlots2
  }
  else if(time === '3:00'){
    availableSlots3 = availableSlots3-1; 
    slot3.innerText = availableSlots3
  }
  else if(time === '3:30'){
    availableSlots4 = availableSlots4-1; 
    slot4.innerText = availableSlots4
  }

  if(availableSlots1<1){
    schedule1.style.display = 'none';
  }

  if(availableSlots2<1){
    schedule2.style.display = 'none';
  }

  if(availableSlots3<1){
    schedule3.style.display = 'none';
  }

  if(availableSlots4<1){
    schedule4.style.display = 'none';
  }

  axios.post('https://crudcrud.com/api/e0708c4e67d042c29742ee85e592509e/meeting', meetingDetials)
  .then((res) => {
    showMeetings(res.data);
  })
  .catch((err) => {
    console.log(err)
  })

  

  document.getElementById("name").value = "";
  document.getElementById("mail").value = "";
}

function showMeetings(meeting) {
  let div = document.getElementById("scheduledMeetings");

  let card = document.createElement("div");
  card.className = "card";
  let person = document.createElement("h3");
  let link = document.createElement("p");
  let cancleBtn = document.createElement('button')

  cancleBtn.innerText = 'Cancle'

  cancleBtn.onclick = () => {
    meetingHandler(meeting)
    div.removeChild(card)
  }

  person.textContent = `Hi ${meeting.name}`;
  link.textContent = `Your meeting is scheduled at ${meeting.time}PM. Don't forget to join`;

  card.appendChild(person);
  card.appendChild(link);
  card.append(cancleBtn)
  div.append(card);
}

function meetingHandler(meeting){
  if(meeting.time === '2:00'){
    availableSlots1 = availableSlots1 + 1;
  }
  else if(meeting.time === '2:30'){
    availableSlots2 = availableSlots2 + 1;
  }
  else if(meeting.time === '3:00'){
    availableSlots3 = availableSlots3 + 1;
  }
  else {
    availableSlots4 = availableSlots4 + 1
  }
  axios.delete(`https://crudcrud.com/api/e0708c4e67d042c29742ee85e592509e/meeting/${meeting._id}`)
  .then(() => {
    console.log('Scheduled meeting was deleted')
  })
  .catch((err) => {
    console.log(err)
  })
}

function getAllMeetings() {
    axios.get('https://crudcrud.com/api/e0708c4e67d042c29742ee85e592509e/meeting')
    .then((res) => {
        for(let i=0; i<res.data.length; i++){
            showMeetings(res.data[i])
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
getAllMeetings();