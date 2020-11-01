var profileusername = sessionStorage.getItem("username");
console.log(profileusername);

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


let bbay = document.getElementById("bbay");
let clark = document.getElementById("clark");
let curie = document.getElementById("curie");
let harvard = document.getElementById("harvard");
let hcssim = document.getElementById("hcssim");
let hshsp = document.getElementById("hshsp");
let lbw = document.getElementById("lbw");
let leadershipseminars = document.getElementById("leadershipseminars");
let libarts = document.getElementById("libarts");
let mites = document.getElementById("mites");
let mmss = document.getElementById("mmss");
let rehss = document.getElementById("rehss");
let ross = document.getElementById("ross");
let rsi = document.getElementById("rsi");
let sams = document.getElementById("sams");
let sumac = document.getElementById("sumac");
let summerscholars = document.getElementById("summerscholars");
let tasp = document.getElementById("tasp");
let yygs = document.getElementById("yygs");

bbay.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if(programs.includes("bbay")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":bbay";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

clark.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("clark")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":clark";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

curie.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("curie")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":curie";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})


harvard.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("harvard")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":harvard";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

hcssim.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("hcssim")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":hcssim";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

hshsp.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("hshsp")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":hshsp";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

leadershipseminars.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("leadershipseminars")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":leadershipseminars";
      console.log(programsinfo);
    
      firebase.database().ref('users/' + profileusername).set({
        programs: programsinfo
      });
    }
  })
})

libarts.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("libarts")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":libarts";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

mites.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("mites")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":mites";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

mmss.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("mmss")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":mmss";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

rehss.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("rehss")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":rehss";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

ross.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("ross")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":ross";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

rsi.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("rsi")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":rsi";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

sams.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("sams")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":sams";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

sumac.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("sumac")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":sumac";
      console.log(programsinfo);
    
      firebase.database().ref('users/' + profileusername).set({
        programs: programsinfo
      });
    }
  })
})

summerscholars.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("summerscholars")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":summerscholars";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

tasp.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("tasp")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":tasp";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

yygs.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var programs = snapshot.child("programs").val();
    if (programs.includes("yygs")) {
      console.log("exists");
    } else {
      programsinfo = programs + ":yygs";
      console.log(programsinfo);
    
      ref.once("value").then(function(snapshot) {
        var clubsinfo = snapshot.child("clubs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

