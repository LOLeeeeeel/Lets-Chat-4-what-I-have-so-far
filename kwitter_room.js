

const firebaseConfig = {
  apiKey: "AIzaSyDy2sPweoulJaoxO_CsDyXZhFDvI0pBzmE",
  authDomain: "lets-chat-974e4.firebaseapp.com",
  projectId: "lets-chat-974e4",
  storageBucket: "lets-chat-974e4.appspot.com",
  messagingSenderId: "688530429623",
  appId: "1:688530429623:web:e425681d0e1ac345bc9f32"
};


firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"

}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name'id="+Room_names+ "onlcick='redirectToRoomName(this.id)'>#"+Room_names+"</div>"
      document.getElementById("output").innerHTML+=row;
      
});});}

getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
};


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
      
}