$(function () {
  // var $window = $(window);

  // // Hide Nav when scroll down
  // $window.on('scroll', function () {
  //   var $nav = $('.navbar');
  //   if ($window.scrollTop() > 40) {
  //     console.log($window.scrollTop());
  //     // $nav.hide();
  //     $nav.fadeOut();
  //   } else {
  //     // $nav.show();
  //     $nav.fadeIn();
  //   }
  // });

});


// Google Maps
function initMap() {
  var marbella = {lat: 29.7442412, lng: -95.3890479};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: marbella});
  var marker = new google.maps.Marker({position: marbella, map: map});
  
}

//29.7442412,-95.3890479