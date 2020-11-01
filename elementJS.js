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


let recycling = document.getElementById("recycling");
let unicef = document.getElementById("unicef");
let cancer = document.getElementById("cancer");
let redcross = document.getElementById("redcross");
let habitat = document.getElementById("habitat");
let amnesty = document.getElementById("amnesty");
let deca = document.getElementById("deca");
let fbla = document.getElementById("fbla");
let tsa = document.getElementById("tsa");
let modelun = document.getElementById("modelun");
let book = document.getElementById("book");
let political = document.getElementById("political");
let comicbook = document.getElementById("comicbook");
let languages = document.getElementById("languages");
let photography = document.getElementById("photography");
let videotech = document.getElementById("videotech");
let film = document.getElementById("film");
let competitivemathematics = document.getElementById("competitivemathematics");
let mathematics = document.getElementById("mathematics");
let ecology = document.getElementById("ecology");
let physics = document.getElementById("physics");
let biology = document.getElementById("biology");
let frcrobotics = document.getElementById("frcrobotics");
let scienceolympiad = document.getElementById("scienceolympiad");
let hosa = document.getElementById("hosa");


//recyclingbutton.addEventListener("click", function(){
//  console.log("bookmarked");
//  firebase.database().ref('users/' + profileusername).set({
//    clubs: "recycling"
//  });
//})

recycling.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("recycling")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":recycling";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

unicef.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("unicef")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":unicef";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

cancer.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("cancer")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":cancer";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

redcross.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("redcross")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":redcross";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

habitat.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("habitat")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":habitat";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})


amnesty.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("amnesty")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":amnesty";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

deca.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("deca")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":deca";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

fbla.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("fbla")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":fbla";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

tsa.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("tsa")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":tsa";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

modelun.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("modelun")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":modelun";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

book.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("book")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":book";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})


political.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("political")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":political";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})


comicbook.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("comicbook")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":comicbook";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})


languages.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("languages")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":languages";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})


photography.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("photography")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":photography";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})


videotech.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("videotech")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":videotech";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})


film.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("film")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":film";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

competitivemathematics.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("competitivemathematics")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":competitivemathematics";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})


mathematics.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("mathematics")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":mathematics";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

ecology.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("ecology")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":ecology";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

physics.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("physics")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":physics";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})


biology.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("biology")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":biology";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

frcrobotics.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("frcrobotics")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":frcrobotics";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
        firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo,
        programs: programsinfo
        });
      })
    }
  })
})

scienceolympiad.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("scienceolympiad")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":scienceolympiad";
      console.log(clubsinfo);
    
      firebase.database().ref('users/' + profileusername).set({
        clubs: clubsinfo
      });
    }
  })
})

hosa.addEventListener("click", function(){
  var ref = firebase.database().ref("users/" +profileusername);
  ref.once("value").then(function(snapshot) {
    var clubs = snapshot.child("clubs").val();
    if (clubs.includes("hosa")) {
      console.log("exists");
    } else {
      clubsinfo = clubs + ":hosa";
      console.log(clubsinfo);
    
      ref.once("value").then(function(snapshot) {
        var programsinfo = snapshot.child("programs").val();
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

