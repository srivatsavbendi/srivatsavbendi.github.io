// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBbwuXool1mmjM1Hf4_Jn7eD_fJV9vcXt0",
  authDomain: "projectfuture-45211.firebaseapp.com",
  databaseURL: "https://projectfuture-45211.firebaseio.com",
  projectId: "projectfuture-45211",
  storageBucket: "projectfuture-45211.appspot.com",
  messagingSenderId: "313052135851",
  appId: "1:313052135851:web:12eecf6ba7701ed76f92ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

const auth = firebase.auth();
  
  
function signUp(){
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  username3 = username.value;
  sessionStorage.setItem("username", username3);
  var profileusername = sessionStorage.getItem("username");

  var ref = firebase.database().ref("users/" +profileusername);

  firebase.database().ref('users/' + profileusername).set({
        clubs: "hi",
        programs: "hi"
  });

  alert("Signed Up");
}
  
  
  
function signIn(){
  var username1 = document.getElementById("username1");
  var email1 = document.getElementById("email1");
  var password1 = document.getElementById("password1");
    
  const promise = auth.signInWithEmailAndPassword(email1.value, password1.value);
  promise.catch(e => alert(e.message));

  username3 = username1.value;
  sessionStorage.setItem("username", username3);

  window.location = "profile.html"

}
  

  
  
function signOut(){
  auth.signOut();
  alert("Signed Out");
  window.location = "index.html";
}
  

