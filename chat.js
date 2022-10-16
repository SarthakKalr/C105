var firebaseConfig = {
    apiKey: "AIzaSyBuc891mUMxIoM0TQiUlqodahpPrSjr2cI",
    authDomain: "letschatwebapp-c0796.firebaseapp.com",
    databaseURL: "https://letschatwebapp-c0796-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-c0796",
    storageBucket: "letschatwebapp-c0796.appspot.com",
    messagingSenderId: "492455617859",
    appId: "1:492455617859:web:ceb8066c16b811689cbbf6"
  };

firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



