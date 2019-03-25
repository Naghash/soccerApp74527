
window.onload = function () {
	leer();
	usuario();
 };
 function firebaseAuth(){
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider);
   }
   
   function usuario() {
	  firebase.auth().onAuthStateChanged(user => {
		  console.log(user.displayName);
	  const nombres =  Array.from(document.getElementsByClassName("nombreCliente"));
		  for (i = 0; i < nombres.length; i++){
			  nombres[i].innerHTML = user.displayName
		  }
		  nombresUsuario = user.displayName;
		  var fotoUsuario = user.photoURL;
   
   })}
   
   
   function firebaseLogOut(){
	firebase.auth().signOut();
   }
   
 
   var db = firebase.database();
   function sendMessage (){
	  var mensaje = document.getElementById("message").value;
	  db.ref('mensajes').push({
	  nombres: nombresUsuario, mensaje: mensaje});
	  document.getElementById("message").value=""
   }
   function leer (){
   db.ref('mensajes').on('child_added',function(data){
	   var ul = document.getElementById("posts");
	   var li = document.createElement("li");
	   li.append(`${data.val().nombres}:` );
	   li.append(data.val().mensaje);
	   ul.appendChild(li);
	  });
	  document.getElementById("message").value=""
   };
   
   


 var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex - 1].style.display = "block";
};

var app = new Vue({
	el: "#app",
	data: {
		data2: [],
		logIn: true,
		clubs: this.data.clubs,
		matches: this.data.matches,
		lastMatches: this.data.lastMatches,
		maps: this.data.matches.map,
		date: this.matches.date,
		teams: this.matches.teams,
		message: null

	},

	// created: function () {
	// 	this.funcOnLoad();
	// },
	methods: {
	// 	 firebaseAuth: function(){
	// 		var provider = new firebase.auth.GoogleAuthProvider();
	// 		firebase.auth().signInWithPopup(provider);
	// 	   },
		   
	// 	    usuario:function() {
	// 		  firebase.auth().onAuthStateChanged(user => {
	// 			  console.log(user.displayName);
	// 		  const nombres =  Array.from(document.getElementsByClassName("nombreCliente"));
	// 			  for (i = 0; i < nombres.length; i++){
	// 				  nombres[i].innerHTML = user.displayName
	// 			  }
	// 			  nombresUsuario = user.displayName;
	// 			  var fotoUsuario = user.photoURL;
		   
	// 	   })},

	// 	sendMessage: function () {
	// 		var db = firebase.database();
	// 		var message = document.getElementById("message").value;
	// 		db.ref('messages').push({
	// 			nombres: nombresUsuario, message: message});
			
	// 		console.log(message);

	// 	},
	// 	 readMessage: function (){
	// 		db.ref('messages').on('child_added',function(data){
	// 			var ul = document.getElementById("posts");
	// 			var li = document.createElement("li");
	// 			ul.appendChild(li);
	// 			li.append(`${data.val().nombres}: ` );
	// 			li.append(data.val().message);
				
	// 		   });
	// 		   document.getElementById("message").value=""
			
	// 	},

		signIn() {
			var provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithPopup(provider);
			console.log(provider)
			this.logIn = false
		},
		signOut() {
			firebase.auth().signOut()
			this.logIn = true

		},


		//  initFirebaseAuth:function() {
		// 	// Listen to auth state changes.
		// 	firebase.auth().onAuthStateChanged(authStateObserver);
		//   },
		// llamadafuncion: function () {
		//   fetch("https://soccer-app-74527.firebaseio.com/matches.json?auth=<ID_TOKEN>", {
		//     method: "GET",
		//   }).then(function (response) {
		//     if (response.ok) {
		//       return response.json();

		//     }
		//     throw new Error(response.statusText);
		//   }).then(function (json) {

		//     app.clubs = json.clubs;

		//   }).catch(function (error) {
		//     console.log("Request failed: " + error.message);
		//   });

		// },
		menuFunction: function () {
			var menu = document.getElementById("myLinks");
			if (menu.style.display === "block") {
				menu.style.display = "none";
			} else {
				menu.style.display = "block";

			}
		},

		openChat: function () {
			document.getElementById("myChat").style.display = "block";
		},

		closeChat: function () {
			document.getElementById("myChat").style.display = "none";
		},
	},

})
