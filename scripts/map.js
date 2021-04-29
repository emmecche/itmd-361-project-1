function init() {
    //alert("working");
    var el = document.getElementById('canvas');

    var aquariumLocation = new google.maps.LatLng(41.8676, -87.6140);
    var fieldLocation = new google.maps.LatLng(41.8663, -87.6170);
    var scienceLocation = new google.maps.LatLng(41.7906, -87.5831);
    var artLocation = new google.maps.LatLng(41.8796, -87.6237);
    var zooLocation = new google.maps.LatLng(41.9217, -87.6336);

    var centerLocation = new google.maps.LatLng(41.8000, -87.6000);

    var mapOptions = {
        center: centerLocation,
        zoom: 8,
        mapTypeId: google.maps.mapTypeId.SATELLITE,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
        }
    };

    var myMap = new google.maps.Map(el, mapOptions);

    var aquariumMarker = new google.maps.Marker({
        position: aquariumLocation,
        map: myMap,
        animation: google.maps.Animation.BOUNCE,
        icon: 'media/fish_marker.png'
    });

    var fieldMarker = new google.maps.Marker({
        position: fieldLocation,
        map: myMap,
        animation: google.maps.Animation.BOUNCE,
        icon: 'media/skull_marker.png'
    });

    var scienceMarker = new google.maps.Marker({
        position: scienceLocation,
        map: myMap,
        animation: google.maps.Animation.BOUNCE,
        icon: 'media/bulb_marker.png'
    });

    var artMarker = new google.maps.Marker({
        position: artLocation,
        map: myMap,
        animation: google.maps.Animation.BOUNCE,
        icon: 'media/art_marker.png'
    });

    var zooMarker = new google.maps.Marker({
        position: zooLocation,
        map: myMap,
        animation: google.maps.Animation.BOUNCE,
        icon: 'media/zoo_marker.png'
    });
    
}

google.maps.event.addDomListener(window, 'load', init);