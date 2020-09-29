let profile = document.getElementById("profilename");
var profileusername = sessionStorage.getItem("username");
profile.innerHTML = profileusername + "'s Portfolio";

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


var ref = firebase.database().ref("users/" +profileusername);
ref.once("value").then(function(snapshot) {
    var clubsinfo = snapshot.child("clubs").val();
    console.log(clubsinfo);

   	if(!clubsinfo.includes(":recycling")){
    	recycling.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":unicef")){
    	unicef.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":cancer")){
    	cancer.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":habitat")){
    	habitat.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":redcross")){
    	redcross.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":amnesty")){
    	amnesty.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":deca")){
    	deca.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":fbla")){
    	fbla.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":tsa")){
    	tsa.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":modelun")){
    	modelun.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":book")){
    	book.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":poltical")){
    	political.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":comicbook")){
    	comicbook.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":languages")){
    	languages.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":photography")){
    	photography.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":videotech")){
    	videotech.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":film")){
    	film.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":competitivemathematics")){
    	competitivemathematics.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":mathematics")){
    	mathematics.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":ecology")){
    	ecology.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":physics")){
    	physics.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":biology")){
    	biology.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":frcrobotics")){
    	frcrobotics.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":scienceolympiad")){
    	scienceolympiad.style.display = 'none';
   	}
   	if(!clubsinfo.includes(":hosa")){
    	hosa.style.display = 'none';
   	}
});




let bbay = document.getElementById("bbay");
let clark = document.getElementById("clark");
let curie = document.getElementById("curie");
let harvard = document.getElementById("harvard");
let hcssim = document.getElementById("hcssim");
let hshsp = document.getElementById("hshsp");
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


var ref = firebase.database().ref("users/" +profileusername);
ref.once("value").then(function(snapshot) {
    var programsinfo = snapshot.child("programs").val();
    console.log(programsinfo);

   	if(!programsinfo.includes(":bbay")){
    	bbay.style.display = 'none';
   	}
   	if(!programsinfo.includes(":clark")){
    	clark.style.display = 'none';
   	}

    if(!programsinfo.includes(":curie")){
      curie.style.display = 'none';
    }
   	
   	if(!programsinfo.includes(":harvard")){
    	harvard.style.display = 'none';
   	}
   	if(!programsinfo.includes(":hcssim")){
    	hcssim.style.display = 'none';
   	}

   	if(!programsinfo.includes(":hshsp")){
    	hshsp.style.display = 'none';
   	}
   	if(!programsinfo.includes(":leadershipseminars")){
    	leadershipseminars.style.display = 'none';
   	}
   	if(!programsinfo.includes(":libarts")){
    	libarts.style.display = 'none';
   	}
   	if(!programsinfo.includes(":mites")){
    	mites.style.display = 'none';
   	}
   	if(!programsinfo.includes(":mmss")){
    	mmss.style.display = 'none';
   	}

   	if(!programsinfo.includes(":rehss")){
    	rehss.style.display = 'none';
   	}
   	if(!programsinfo.includes(":ross")){
    	ross.style.display = 'none';
   	}
   	if(!programsinfo.includes(":rsi")){
    	rsi.style.display = 'none';
   	}
   	if(!programsinfo.includes(":sams")){
    	sams.style.display = 'none';
   	}
   	if(!programsinfo.includes(":sumac")){
    	sumac.style.display = 'none';
   	}

   	if(!programsinfo.includes(":summerscholars")){
    	summerscholars.style.display = 'none';
   	}
   	if(!programsinfo.includes(":tasp")){
    	tasp.style.display = 'none';
   	}
   	if(!programsinfo.includes(":yygs")){
    	yygs.style.display = 'none';
   	}
});
