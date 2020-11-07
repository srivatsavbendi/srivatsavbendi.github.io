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
  
  
function signUp(){
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  usernamenew = username.value;
  emailnew = email.value;
  passwordnew = password.value;

  usernamelength = usernamenew.length;
  passwordlength = passwordnew.length;
  var ref = firebase.database().ref();

    if (usernamelength<8 || passwordlength<8){
      alert("Username and password must be 8 characters long");
    }
    else{
      ref.child("users").orderByChild("email").equalTo(emailnew).once("value",snapshot => {
        if (snapshot.exists()){
          alert("Email is already in use");
        }
        else{
            ref.child("users").orderByChild("username").equalTo(usernamenew).once("value",snapshot => {
            if (snapshot.exists()){
              alert("Username is already in use");
            }
            else{
              alert("Signed Up");
              sessionStorage.setItem("username", usernamenew);
              firebase.database().ref('users/' + username.value).set({
                username: username.value,
                email: email.value,
                password: password.value, 
                clubs: "hi",
                programs: "hi"
              });
              window.location = "profile.html";
            }
          });
        }
      });
    }
  };



  

  
  
