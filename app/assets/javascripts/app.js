var ready;
var map;
var myLatlng;
var allmarkers=[];
ready = function() {
  drawMapAndOtherMarkers();
  bindEventListeners();
};

$(document).ready(ready);
$(document).on('page:load', ready);

function drawMapAndOtherMarkers(){
  navigator.geolocation.getCurrentPosition(function(position) {
  myLatlng=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  var mapOptions = {
      center: { lat: position.coords.latitude, lng: position.coords.longitude},
      zoom: 13
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  });
  $.ajax({
    url :"locations",
  }).done(function(data){
    console.log(data);
    for (var i=0;i<data.length;i++){
      myLatlng = new google.maps.LatLng(data[i].lat,data[i].long);
      // var marker;
      var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      });
      allmarkers.push(marker);
    }
  })
}


function bindEventListeners(){
  $("#danger_button").on("click",function(event){
    event.preventDefault(); // Prevent default submit
    console.log(myLatlng);
    cas_number = prompt("What would you like to log?");
    lastMarker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: cas_number
    });
    allmarkers.push(lastMarker);
    markerCluster = new MarkerClusterer(map, allmarkers);
  })
}
