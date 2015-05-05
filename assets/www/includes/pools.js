/*iReminder docready.js
//Author:Peter Chang
//version:1.09
//date: 2013/02/26
*/

$(function(){
	
			var map;
			var infowindow;
			 var nowLatLng = new google.maps.LatLng(25.0478, 121.5172);;
			  var service;
			  var marker;
			 
		
			 
		// 位置取得  
		if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(loc) {
			
		  
				google.maps.event.addDomListener(window, 'load', initialize( new google.maps.LatLng(loc.coords.latitude, loc.coords.longitude) ));
				
			}, function(error) {
			
				$.get('https://maps.googleapis.com/maps/api/browserlocation/json?browser=chromium&sensor=true', function(data) { 
				
				google.maps.event.addDomListener(window, 'load', initialize( new google.maps.LatLng(data.location.lat, data.location.lng) ));
				});
			
			},{timeout: 1000});
		}
		 
			// google.maps.event.addDomListener(window, 'load', initialize( nowLatLng ));
			 
			
			function initialize(pyrmont) {
					
				
				
				if (!map){
					map = new google.maps.Map(document.getElementById('map_canvas'), {
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					center: pyrmont,
					zoomControl: false,
					zoom: 12
				  });
				  }
				  else{
					map.setCenter(pyrmont);
				  }

				  var request = {
					location: pyrmont,
					radius: 50,
					query: 'swimming pool'
				  };
				  
				  infowindow = new google.maps.InfoWindow();
				  service = new google.maps.places.PlacesService(map);
				  service.textSearch(request, callback);
				  
				
				
				  marker = new google.maps.Marker({
						map: map,
						title: '現在位置',
						position: pyrmont
					});
				  
				
			}
			
			function callback(results, status) {
			  if (status == google.maps.places.PlacesServiceStatus.OK) {
				for (var i = 0; i < results.length; i++) {
				  createMarker(results[i]);
				}
			  }
			}

			function createMarker(place) {
			  var placeLoc = place.geometry.location;
			  var marker = new google.maps.Marker({
				map: map,
				title: place.name,
				icon:'swim.png',
				position: place.geometry.location
			  });

			  google.maps.event.addListener(marker, 'click', function() {
				infowindow.setContent(place.name + '<br>' +place.formatted_address +'<br>Distance:'+ place.geometry.location.distanceFrom(nowLatLng)+' KM');
				
				infowindow.open(map, this);
			  });
			}
			
			//cal distacne between two marker
			google.maps.LatLng.prototype.distanceFrom = function(newLatLng) {
			var lat1 = this.lat() * Math.PI / 180.0;
			var lat2 = newLatLng.lat() * Math.PI / 180.0;
			var lngDiff = (newLatLng.lng() - this.lng()) * Math.PI / 180.0;
			return formatFloat(Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1)  * Math.cos(lat2) * Math.cos(lngDiff)) * 6371.00000968392, 2);
			};
			
			//get last two float
			function formatFloat(num, pos)
			{	
			var size = Math.pow(10, pos);
			return Math.round(num * size) / size;
			}
			

		
	
		/*Read As Text*/
		function readAsText(file) {
			var reader = new FileReader();
			//asnycrhonous task has finished, fire the event:
			reader.onloadend = function(evt) {
			console.log("Read as text");
			console.log(evt.target.result);
			//assign the data to the global var
			jsonString = evt.target.result
			//keep working with jsonString here
			};
			
			  reader.readAsText(file);    
		}
});

