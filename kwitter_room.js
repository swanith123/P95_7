var firebaseConfig = {
    apiKey: "AIzaSyCWra7eikGnsk31UGiwRoTAnPU9MhUg38g",
    authDomain: "kwitterproject-20058.firebaseapp.com",
    databaseURL: "https://kwitterproject-20058-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-20058",
    storageBucket: "kwitterproject-20058.appspot.com",
    messagingSenderId: "574664286840",
    appId: "1:574664286840:web:b891ec618dc4e68c96438d",
    measurementId: "G-NHCJFD080G"
  };
  
  firebase.initializeApp(firebaseConfig);

function addRooms(){
    roomname = document.getElementById("input").value;
    firebase.database().ref("/").child(roomname).update({
          purpose: "adding the roomname"
    });
    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("input").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
room_names = childKey;
//Start code
console.log("Room Name - " + roomname);
row="<div class='roomname' id="+room_names+" onclick='redirectToRoomName(this.id)'>#"+ roomname+"</div><hr>";
document.getElementById("input").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(username);
  localStorage.setItem(roomname, username);
  window.location = "kwitter_page.html";
}

function logOut(){
  localStorage.removeItem(username);
  localStorage.removeItem(roomname);
  window.location="index.html";
  }