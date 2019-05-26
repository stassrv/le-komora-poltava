; (function () {
  "use strict";
  let btn = document.querySelector(".ba-menu-toggle");
  let menu = document.querySelector(".ba-menu");
  btn.addEventListener("click", function (e) {
    menu.classList.toggle("open");
  });

  //Add map
  function initMap() {
    //Create map and asign to this baMap var
    let mapCenter = {
      lat: 49.584661,
      lng: 34.559750
    };
    let baMap = new google.maps.Map(document.getElementById('ba-map'), {
    center: mapCenter,
    zoom: 17
    
    });

    

    let cities = {
    Кооперативная: {lat: 49.986794,lng: 36.232815},
    Васильковская: {lat: 50.393865,lng: 30.489887},
    Пушкинская: {lat:50.447584,lng:30.518842},
    Конституции: {lat: 49.584661,lng: 34.559750}
    };
    let mapMarkers = {};

    for(let city in cities){
    
    let marker = new google.maps.Marker(
      {
        position: cities[city],
         map: baMap,
         icon: 'img/marker.svg'	
        }
      );
      let infowindow = new google.maps.InfoWindow({
      content: '<b>' + city + '</b>'
      });
      infowindow.open(baMap, marker);

      mapMarkers[city] = marker;
    }
    // The marker, positioned at Uluru
    

    baMap.setCenter(mapCenter);

    $('#city-select').on('change', function (e) {
      baMap.panTo(cities[this.value]);
    })
  }
  $(document).ready(function (e){
    initMap();
  });

})();

(function($) {
$(function() {

  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},800);
    return false;
  });

});
})(jQuery);

;(function($) {
	"use strict";
	let accordion = $('.ba-accordion');

	accordion.find('dt').on('click', function(e){
		let clickedContent = $(this).next('dd');
		accordion.find('dd').not(clickedContent).slideUp();
		clickedContent.slideToggle();
	});
})(jQuery);

let menuSlider = $('.ba-menu-slider');

menuSlider.slick({
  autoplay: true
});