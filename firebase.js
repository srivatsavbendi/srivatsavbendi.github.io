// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB94h7P-9hQe5nsYKRR0dJOYO2azUnBpHs",
    authDomain: "projectfuture-ec96f.firebaseapp.com",
    databaseURL: "https://projectfuture-ec96f.firebaseio.com",
    projectId: "projectfuture-ec96f",
    storageBucket: "projectfuture-ec96f.appspot.com",
    messagingSenderId: "924271315084",
    appId: "1:924271315084:web:ee93bee043fafad85693a9",
    measurementId: "G-5VYLP4YF2F"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

const auth = firebase.auth();
  

function signIn(){
  var username1 = document.getElementById("username1");
  var password1 = document.getElementById("password1");
  signinusername = username1.value;
  signinpassword = password1.value;
  var ref = firebase.database().ref("users/" +username1.value);

  ref.once("value").then(function(snapshot) { 
    var databasepassword = snapshot.child("password").val();
    if(databasepassword == signinpassword){
      sessionStorage.setItem("username", signinusername);
      window.location = "profile.html";
    }else{
      alert("Username/Password do not match")
    }
  })

}
  


