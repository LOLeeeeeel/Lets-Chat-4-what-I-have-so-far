
const firebaseConfig = {
    apiKey: "AIzaSyDy2sPweoulJaoxO_CsDyXZhFDvI0pBzmE",
    authDomain: "lets-chat-974e4.firebaseapp.com",
    projectId: "lets-chat-974e4",
    storageBucket: "lets-chat-974e4.appspot.com",
    messagingSenderId: "688530429623",
    appId: "1:688530429623:web:e425681d0e1ac345bc9f32"
  };
  
  
  const app = initializeApp(firebaseConfig);

function addUser(){
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
    
}