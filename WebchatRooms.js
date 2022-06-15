const firebaseConfig = {
    apiKey: "AIzaSyDAG-Mq72qFU68ozPKEZdvmv_Fe3M4eThM",
    authDomain: "webchat-database.firebaseapp.com",
    databaseURL: "https://webchat-database-default-rtdb.firebaseio.com",
    projectId: "webchat-database",
    storageBucket: "webchat-database.appspot.com",
    messagingSenderId: "321090356994",
    appId: "1:321090356994:web:7d76e26b92c2465fcc641b"
  };
  

  firebase.initializeApp(firebaseConfig);
//FIREBASE LINKS😁

room_name = localStorage.getItem("roomname");
user_name = localStorage.getItem("username");

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("RoomName");
    window.location = "index.html";
}

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        likes:0
    });
    document.getElementById("msg").value = "";
}
function title(){
    document.getElementById("title").innerHTML = "WebChat Room: #" + room_name;
}
title();