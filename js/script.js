$(function () {
  var $window = $(window);

  // Hide Nav when scroll down
  $window.on('scroll', function () {
    var $nav = $('.navbar');
    if ($window.scrollTop() > 40) {
      // $nav.hide();
      $nav.fadeOut();
    } else {
      // $nav.show();
      $nav.fadeIn();
    }
  });

});