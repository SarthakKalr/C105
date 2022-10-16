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
username= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome"+username+"!";
function addroom(){
    room_name= document.getElementById("roomname").value;
    firebase.datbase().ref("/").child(room_name).update({
        purpose: "adding_room_name"
    });
    localStorage.setItem("roomname",room_name);
    window.location= "letschatpage.html";

}
function getData(){firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML= ""; snapshot.forEach(function(childSnapshot) {childKey= childSnapshot.key;
    Room_names= childKey;
    console.log(Room_names);
    row= "<div class='roomname' id="+Room_names+" onclick='redirectRoomname(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+= row;
});});}
getData()
function redirectRoomname(names){
    console.log(names);
    localStorage.setItems("roomnames", names);
    window.location= "letschatpage.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("roomname");
    window.location= "index.html";
}