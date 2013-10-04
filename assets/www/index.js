/*iReminder docready.js
//Author:Peter Chang
//version:1.09
//date: 2013/02/26
*/

$(function(){
	
	$(document).ajaxStart(function() {
		$.mobile.loading('show');
	});

	$(document).ajaxStop(function() {
		$.mobile.loading('hide');
	});
	 
	/*Start document ready*/ 
  	$(document).ready(function(){
      

    
	/*phonegap plugin module*/	
    document.addEventListener("deviceready", onDeviceReady, false);
 
	// Cordova is loaded and it is now safe to call Cordova methods
    function onDeviceReady() {
	
	//menu button listener
	document.addEventListener("menubutton", trigger_menu, false);
	
      //backbutton listener
      document.addEventListener("backbutton", function(e){
        if($.mobile.activePage.is('#home')){
        e.preventDefault();
		
		if($('#menu').is(':visible')) {
				trigger_menu();
		}
		else{
			navigator.notification.confirm(
			'您確定要離開程式嗎?',  // message
			function(button){
				if (button === 2){ 
					navigator.app.exitApp();
				}
			},            // callback function
			'iSwimming',               // title
			'不好,好的'              // confirm 
			 );
		 }
      }
      else {
        navigator.app.backHistory()
     }
     }, false); 
	
       //no network listener ; force close app
       document.addEventListener("offline", function() {
       navigator.notification.alert(
            '請開啟3G或Wifi!!',  // message
            function(){
			//navigator.app.exitApp();
			},         // callback
            '沒有網路',            // title
            '確認'                  // buttonName
        );			
        }, false);
		
		
	}/*end of deviceready*/
	/*end of phonegap module*/
	
		$('.show-menu').click(trigger_menu);
	
	});/*end of document ready*/
	
	    function trigger_menu()
        {		
            $('#menu').slideToggle(500);
			event.stopPropagation();
        }
		
		$('html').click(function() {
		   //$('#menu').hide(500);
		   	if($('#menu').is(':visible')) {
				trigger_menu();
			}
		});
	
		
		/*location show get no
			$('#locations').on('pageshow', function() {
			var map;
			var infowindow;
			 var nowLatLng;
			 
			 // 位置取得 
			 if(navigator.geolocation) {
			 	 
				navigator.geolocation.getCurrentPosition(function(loc){
				
				nowLatLng = new google.maps.LatLng(loc.coords.latitude, loc.coords.longitude);
		  
				google.maps.event.addDomListener(window, 'load', initialize( nowLatLng ));
			 

			});
			 
			}
			 else{
					alert('navigator geolocation failed, try to reboot');
			 }
			 
			 
			
			function initialize(pyrmont) {
					
				$.mobile.showPageLoadingMsg();
				
				  map = new google.maps.Map(document.getElementById('map_canvas'), {
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					center: pyrmont,
					zoomControl: false,
					zoom: 12
				  });

				  var request = {
					location: pyrmont,
					radius: 50,
					query: 'swimming pool'
				  };
				  infowindow = new google.maps.InfoWindow();
				  var service = new google.maps.places.PlacesService(map);
				  service.textSearch(request, callback);
				  
					var marker = new google.maps.Marker({
						map: map,
						title: 'Present location',
						position: nowLatLng
					});
				  
				  $.mobile.hidePageLoadingMsg();
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
				icon:'images/swim.png',
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
			
			});
		*/
	
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

