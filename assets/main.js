
$(document).ready(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAnKjwKZES0-aacizPnvMqgchvlGvHHhZ0",
    authDomain: "trainproject-657ae.firebaseapp.com",
    databaseURL: "https://trainproject-657ae.firebaseio.com",
    projectId: "trainproject-657ae",
    storageBucket: "",
    messagingSenderId: "907981175",
    appId: "1:907981175:web:e58164227288edce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // hide container
  $('.hide').slideDown(1550);
  // listen for submit
  var name = '';
  var time = '';
  var destination = '';
  var frequency = '';
  $('#form').on('submit', function(e) {
    e.preventDefault();
    var name = $('#name').val().trim();
    var time = $('#time').val().trim();
    var destination = $('#destination').val().trim();
    var frequency = $('#frequency').val().trim();
    
    firebase.database().ref().set({
      name: name,
      time: time,
      destination: destination,
      frequency: frequency
    });
  })

  

});