var form = document.getElementById("schedule-form");
let time;

function testing(t) {
  time = t;
  form.style.visibility = "visible";
}

function addNewMeeting(event) {
  event.preventDefault();
  console.log("testing");
  form.style.visibility = "hidden";

  const name = document.getElementById("name").value;
  const mail = document.getElementById("mail").value;

  const meetingDetials = {
    name,
    mail,
    time
  };

  axios.post('https://crudcrud.com/api/d0d5d5363ca142dabd87f55a1ce06a58/meeting', meetingDetials)
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

  person.textContent = `Hi ${meeting.name}`;
  link.textContent = `Your meeting is scheduled at ${meeting.time}PM. Don't forget to join`;

  card.appendChild(person);
  card.appendChild(link);
  div.append(card);
}

function getAllMeetings() {
    axios.get('https://crudcrud.com/api/d0d5d5363ca142dabd87f55a1ce06a58/meeting')
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