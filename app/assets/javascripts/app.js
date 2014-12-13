function bindEventListeners(){
 $("#danger_button").on("click",function(event){
  navigator.geolocation.getCurrentPosition(function(position) {

   var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

   var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Hello World!'
  });

 })
})
}

function initializeWithCurrentPos() {

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    var mapOptions = {
      center: { lat: position.coords.latitude, lng: position.coords.longitude},
      zoom: 14
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  });

  var myLatlng = new google.maps.LatLng(37.450409,-122.164709);

   var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Hello World!'
  });

}
$(document).ready(function(){
  // initializeWithCurrentPos();
  // bindEventListeners();

  // INITILIAZE MAP
  var map;
  var marker1;
  var marker2;
  var marker3;
  var allmarkers;
  var markerCluster

  var mapOptions = {
      center: { lat: 37.443041799999996, lng: -122.15814759999999},
      zoom: 10
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  });
  // GET CURRENT POSITION FROM HTML5 GEOCO
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    var mapOptions = {
      center: { lat: position.coords.latitude, lng: position.coords.longitude},
      zoom: 14
    };
   map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
   //ADD MARKER 1
  var myLatlng = new google.maps.LatLng(37.450409,-122.164709);

   marker1 = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'House 1,4 Casualties'
  });
   //ADD MARKER 2
   var myLatlng = new google.maps.LatLng(37.447782, -122.155434);

    marker2 = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'House 2, 3 Casualties'
  });

  });

  $("#danger_button").on("click",function(event){
    promptText = "Enter the casualty number";
    cas_number = prompt(promptText);
    console.log('Blocking attempt to submit form using preventDefault().'); // DEBUG
    event.preventDefault(); // Prevent default submit


    navigator.geolocation.getCurrentPosition(function(position) {

   var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

    marker3 = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: cas_number
  });

  allmarkers = [marker1,marker2,marker3];
  markerCluster = new MarkerClusterer(map, allmarkers);


 })
})