const firebaseConfig = {
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
  room_name= localStorage.getItem("roomname");
  function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: username,
          message: msg,
          like:0
    });
    document.getElementById("msg").value= ""; 
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name= message_data['name']
message= message_data['message']
like= message_data['like']
name_tag= "<h4>"+name+"</h4>"
message_tag= "<h4 class='message_h4'>"+message+"</h4>"
like_button= "<button class='btn btn-warning' id="+firebase_message_id+" value= "+like+" onclick='updatelike(this.id)'>likes:"+like+"</button>"
row= name_tag+message_tag+like_button;
document.getElementById("output").innerHTML+= row;
//End code;
    } });  }); }
getData();
function updatelike(messageid){
    console.log(messageid);
    buttonid= messageid;
    likes= document.getElementById(buttonid).value;
    updatedlikes= Number(likes) +1;
    console.log(updatedlikes);
    firebase.database().ref(room_name).child(messageid).update({
       like: updatedlikes
    });

}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
}