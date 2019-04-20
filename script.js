function initMap() {

	var belmont = {
		info: '<strong>Chipotle on Belmont</strong><br>\
					1025 W Belmont Ave<br> Chicago, IL 60657<br>\
					<a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
		lat: 0.0000,
		long: -0.0000
	};

	var locations = [

      [belmont.info, belmont.lat, belmont.long, 1],

    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(0.0000, 0.0000),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	
	  
	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
