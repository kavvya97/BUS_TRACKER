var map,marker;
var arrayOfPath = [];
var directionsService;
var directionsDisplay;
var imageArray = ["bus.jpg", "bus_stop.jpg","bus2.jpg","bus3.jpg","bus4.jpg","bus5.jpg","bus6.jpg"];
var today,time;
var timeList;
var locationDiv;
var currentLocation;
var busNumber;
var searchTextContainer;
var routeList;
var stop,dept,arrival;
var prevSlot = {"currentTime": "", "actualBusTime": "", "departuredAt": ""};
var nextSlot = {"currentTime": "", "actualBusTime": "", "willArriveIn": ""};
var options;
var searchContainer;
var stepDisplay;
var search,close;
var searchResultContainer;
var sourceLabel;
var busLabel;
var destinationLabel;
var labelNav;
var cityCircle;
var geocoder;
var markers = [];
var nearestMarker;
// var timeDivision;
var nav;
var sourceDestinationInputContainer;
var showBusNumber;
var swap_vert;
var directions_bus;
var searchForSourceDest;
var itemsInBusArray = ["1b","5b","18d","21g","23c","29c","41d","54f"];
var sourceInputTxt,destinationInputTxt;
var busFoundArray = [];
var popupForDisplayingInvalidBusNumber;
var span;
var closeModal;
var ulForDisplayBus;
var divForDisplayingBus;
var busNumbervalue; 
var timeList2,routeList2,locationList2,mapping; 
var optionsTime,optionsRoute,optionsLocation;
var specialKeys = new Array();
specialKeys.push(8);  //Backspace
specialKeys.push(9);  //Tab
specialKeys.push(46); //Delete
specialKeys.push(36); //Home
specialKeys.push(35); //End
specialKeys.push(37); //Left
specialKeys.push(39); //Right
window.addEventListener("DOMContentLoaded", function() {
    getElements();
}, false);

function getElements() {
    optionsTime = document.getElementById("time");
    optionsRoute = document.getElementById("route");
    optionsLocation = document.getElementById("location");
    mapping = document.getElementById("map");
    searchContainer = document.getElementsByClassName("searchContainer")[0];
    searchResultContainer = document.getElementById("searchResultContainer");
    searchTextContainer = document.getElementsByClassName("searchTextContainer")[0];
    timeList2 = document.getElementById("timeList2");
    routeList2 = document.getElementById("routeList2");
    locationList2 = document.getElementById("locationList2");
    busNumber =  document.getElementById("bus_Number");
    timeList = document.getElementById("timeList");
    routeList = document.getElementById("routeList");
    locationDiv = document.getElementById("locationList");
    options = document.getElementById("options");
    sourceLabel = document.getElementById("sourceLabel");
    destinationLabel = document.getElementById("destinationLabel");
    busLabel = document.getElementById("busLabel");
    stop = document.getElementById("Near");
    dept = document.getElementById("Dept");
    arrival = document.getElementById("Arrival");
    searchForBusNumber = document.getElementById("searchForBusNumber");
    labelNav = document.getElementById("labelNav");
    nav = document.getElementById("nav");
    showBusNumber = document.getElementById("showBusNumber");
    sourceDestinationInputContainer = document.getElementById("sourceDestinationInputContainer");
    swap_vert = document.getElementById("swap_vertIcon");
    directions_bus = document.getElementById("directionBusIcon");
    searchForSourceDest = document.getElementById("searchForSourceDest");
    sourceInputTxt = document.getElementById("sourceInputTxt");
    destinationInputTxt = document.getElementById("destinationInputTxt");
    popupForDisplayingInvalidBusNumber = document.getElementById('popupForDisplayingInvalidBusNumber');
    popupForDisplayingInvalidRoutes = document.getElementById('popupForDisplayingInvalidRoutes');
    span = document.getElementsByClassName("close")[0];
    closeModal = document.getElementsByClassName("closeModal")[0];
    ulForDisplayBus = document.getElementById("ulForDisplayBus");
    divForDisplayingBus = document.getElementById("divForDisplayingBus");
    divForDisplayingBus.style.visibility = "hidden";
    sourceDestinationInputContainer.style.visibility = "hidden";
    searchForSourceDest.style.visibility = "hidden";

    popupForDisplayingInvalidBusNumber.style.display = "none";
    popupForDisplayingInvalidRoutes.style.display = "none";

    timeList.style.display = "none";
    routeList.style.display = "none";
    locationDiv.style.display = "none";

    timeList2.style.display = "none";
    routeList2.style.display = "none";
    locationList2.style.display = "none";
}
function loader(){
    myVar = setTimeout(showPage, 3000);
}
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("map").style.display = "block";
    nav.style.display = "block";
    searchContainer.style.display = "block";
    searchTextContainer.style.display = "block";

  }

function initMap()
{
    console.log("HI");
    // geocoder = new google.maps.Geocoder;
    // directionsService = new google.maps.DirectionsService;
    // directionsDisplay = new google.maps.DirectionsRenderer;
    // stepDisplay = new google.maps.InfoWindow;
    //     var location= {lat: 13.082,lng: 80.270};
    //     map=new google.maps.Map(document.getElementById("map"),{
    //         zoom:16,
    //         center:location,
    //     });
    //     // directionsDisplay.setMap(map);
      
    //     map.setOptions({draggable: true});
    //     infoWindow = new google.maps.InfoWindow;
        
          
   
    //    // Try HTML5 geolocation.
    //     if (navigator.geolocation)
    //     {
    //             navigator.geolocation.getCurrentPosition(function(position) 
    //             {  
    //                 currentLocation = 
    //                 {
    //                     lat: position.coords.latitude,
    //                     lng: position.coords.longitude
    //                 };
    //                 infoWindow.setPosition(currentLocation);
    //                 infoWindow.setContent('Current Location');
    //                 infoWindow.open(map);
                    
    //                 cityCircle = new google.maps.Circle({
    //                 strokeColor: '#FDFEFF',
    //                 strokeOpacity: 1,
    //                  strokeWeight: 2,
    //                 fillColor: '#4285F4',
    //                 fillOpacity: 1,
    //                 map: map,
    //                 center: currentLocation,
    //                 radius: 30
    //                 });
    //                 google.maps.event.addListener(cityCircle,'mouseover',function(){
    //                     this.getMap().getDiv().setAttribute('title',this.get('Current Location'));});
                        
    //                 map.setCenter(currentLocation);

    //             }, function() {
    //         handleLocationError(true, infoWindow, map.getCenter());
    //         });
    //     } 
    //     else 
    //     {
    //     // Browser doesn't support Geolocation
    //     handleLocationError(false, infoWindow, map.getCenter());
    //     }   


    //     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //         infoWindow.setPosition(pos);
    //         infoWindow.setContent(browserHasGeolocation ?
    //         'Error: The Geolocation service failed.' :
    //         'Error: Your browser doesn\'t support geolocation.');
    //         infoWindow.open(map);
    //     }     
        
          
}
function IsAlphaNumeric(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 97 && keyCode <= 122))||(keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode);
    return ret;
}
function IsAlphaNumericSD(e){
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode === 32)||(keyCode >= 97 && keyCode <= 122) || (keyCode >= 65 && keyCode <= 90) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
    return ret;
}
function sourceDestination(){ 
    map.panTo(currentLocation);
    map.setZoom(16);
    // infoWindow  = new google.maps.InfoWindow;
    // infoWindow.setPosition(currentLocation);
    // infoWindow.setContent('Current Location');
    // infoWindow.open(map);
    mapping.style.filter = "blur(0px)";                                          //Swap-vert
    swap_vert.style.backgroundColor = "#52213E";
    directions_bus.style.backgroundColor = "transparent";
    sourceDestinationInputContainer.style.visibility = "visible";
    searchForSourceDest.style.visibility = "visible";
    labelNav.style.visibility ="hidden";
    searchResultContainer.style.visibility = "hidden";
    options.style.visibility ="hidden";
    searchForBusNumber.style.visibility = "hidden";
    busNumber.value = "";
    clearMarkers();
}
function backToBus(){      
    clearMarkers();                                            //direction-bus
    map.panTo(currentLocation);
    map.setZoom(16);
    // infoWindow  = new google.maps.InfoWindow;
    // infoWindow.setPosition(currentLocation);
    // infoWindow.setContent('Current Location');
    directions_bus.style.backgroundColor = "#52213E";
    //after clicking the source destination icon,then coming back to showing bus no, the next thing is to make the results disspaer
    searchResultContainer.style.visibility ="hidden";
    options.style.visibility = "hidden";
    labelNav.style.visibility = "hidden";
    divForDisplayingBus.style.visibility = "hidden";
    sourceInputTxt.value = "";
    destinationInputTxt.value = "";
    swap_vert.style.backgroundColor = "transparent";
    searchForBusNumber.style.visibility = "visible";
    sourceDestinationInputContainer.style.visibility = "hidden";
    searchForBusNumber.style.visibility = "visible";
    searchForSourceDest.style.visibility = "hidden";
}
function onSearchClick(){
    clearMarkers();
    map.panTo(currentLocation);
    if(busNumber.value === ""){
        labelNav.style.visibility = "hidden";
        searchResultContainer.style.visibility = "hidden";
        options.style.visibility = "hidden";
        return;
        
    }
   
    busNumber.addEventListener("keyup", function(event) {
         if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("searchForBusNumber").click();
            }
        });
    setTimeout(function(){infoWindow.close();}, '0000');
    var flag = 0;
    var busNumberValue = busNumber.value.toString().toLowerCase();
    for(i in itemsInBusArray)
    {
        if(busNumberValue === itemsInBusArray[i]) {flag = 1;break;}
        else {flag = 0;}
          
    }
    if(flag === 0){
        popupForDisplayingInvalidBusNumber.style.display = "block";
        span.onclick = function() {
            popupForDisplayingInvalidBusNumber.style.display = "none";
            map.panTo(currentLocation);
            map.setZoom(16);
          }
        window.onclick = function(event) {
            if (event.target == popupForDisplayingInvalidBusNumber) {
              popupForDisplayingInvalidBusNumber.style.display = "none";
            }
        }
        searchResultContainer.style.visibility = "hidden";
        options.style.visibility = "hidden";
        labelNav.style.visibility = "hidden";
        divForDisplayingBus.style.visibility = "hidden";
        busNumber.value = "";
        return;
        
    }
    displayLocation();
    // toggle()
                            //set the zoom of the map
    // searchContainer.style.visibility = "visible";
    options.style.visibility = "visible";
    searchResultContainer.style.visibility = "visible";
    labelNav.style.visibility = "visible";

    
    
    var icon = {
        url: "marker.png", // url
        scaledSize: new google.maps.Size(30, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(13, 39) // anchor
    };
    marker = new google.maps.Marker({
        position: currentLocation,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        title : 'current location',
        icon: icon
    });
    markers.push(marker);
    
    requestRoute();
}
function onListClick(busNumber){
    return function() {
     
    requestRoute2(busNumber);
    
    map.panTo(currentLocation);
    map.setZoom(12.5);
    labelNav.style.visibility = "visible";
    options.style.visibility = "visible";
    divForDisplayingBus.style.visibility = "hidden";
    }
}
function displayBusesThroughGivenRoutes(){
    clearMarkers();
    map.panTo(currentLocation);
    map.setZoom(16);
   
    if(sourceInputTxt.value === "" || destinationInputTxt.value === "")
    {
        labelNav.style.visibility = "hidden";
        searchResultContainer.style.visibility = "hidden";
        options.style.visibility = "hidden";
        return;
    }
    setTimeout(function(){infoWindow.close();}, '0000');
    [ sourceInputTxt, destinationInputTxt ].forEach(function(element) {
        element.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("searchForSourceDest").click();
                }
        });
     });
    divForDisplayingBus.style.visibility = "visible";
    // searchContainer.style.visibility = "hidden";
    options.style.visibility = "hidden";
    searchResultContainer.style.visibility = "hidden";
    labelNav.style.visibility = "hidden";
    var sourceData = sourceInputTxt.value.toLowerCase();
    var destData = destinationInputTxt.value.toLowerCase();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
            var rms=JSON.parse(this.responseText);
            var itemsInRms=rms.items;
            while(ulForDisplayBus.firstChild) ulForDisplayBus.removeChild(ulForDisplayBus.firstChild);
            busFoundArray = [];
            for(index in itemsInRms)
            {
                var item = itemsInRms[index];
                var route = item.route;
                var routeLower = route.toString().toLowerCase();
              
                if(routeLower.includes(sourceData) && routeLower.includes(destData))
                {
                    busNumbervalue = item.bus_number;
                    busFoundArray.push(item.bus_number);
                    var lidisplayBus = document.createElement('li');
                    lidisplayBus.className = "lidisplayBus";
                    ulForDisplayBus.appendChild(lidisplayBus);
                    // lidisplayBus.setAttribute('onclick','onListClick(busNumbervalue);');
                    lidisplayBus.addEventListener('click', onListClick(busNumbervalue));

                   var divisionForDisplayBusNumber = document.createElement('div');
                   divisionForDisplayBusNumber.className = "divisionForDisplayBusNumber";
                   
                   var imageSource = document.createElement('img');
                   imageSource.className = "imageSource";

                   var busNumberDisplay = document.createElement('label');
                   busNumberDisplay.className = "busNumberDisplay";

                   var spanSourceDestinationArrow = document.createElement('span');
                   spanSourceDestinationArrow.className = "spanSourceDestinationArrow";

                   var sourceDisplay = document.createElement('label');
                   sourceDisplay.className = "sourceDisplay";

                   var destinationDisplay = document.createElement('label');
                   destinationDisplay.className = "destinationDisplay";
                   var spanarrow = document.createElement('span');
                   spanarrow.className = "spanarrow";

                   var divBusNUmberSourceDestArrow = document.createElement('divBusNUmberSourceDestArrow');
                   divBusNUmberSourceDestArrow.className = "divBusNUmberSourceDestArrow";

                   divisionForDisplayBusNumber.appendChild(imageSource);
                   divBusNUmberSourceDestArrow.appendChild(busNumberDisplay);

                   spanSourceDestinationArrow.appendChild(sourceDisplay);
                   spanSourceDestinationArrow.appendChild(spanarrow);
                   spanSourceDestinationArrow.appendChild(destinationDisplay);
                   
                   divBusNUmberSourceDestArrow.appendChild(spanSourceDestinationArrow);

                   divisionForDisplayBusNumber.appendChild(divBusNUmberSourceDestArrow);
                   

                   lidisplayBus.appendChild(divisionForDisplayBusNumber);
                  
                   busNumberDisplay.innerText = item.bus_number;
                   
                   imageSource.src = 'busicon.jpg';
                   sourceDisplay.innerText = item.source;
                   spanarrow.innerHTML = "&#8651;";
                   destinationDisplay.innerText = item.destination;
                  
                    
                }
            }
            if(busFoundArray.length === 0){
                popupForDisplayingInvalidRoutes.style.display = "block";
                searchResultContainer.style.visibility = "hidden";
                options.style.visibility = "hidden";
                labelNav.style.visibility = "hidden";
                divForDisplayingBus.style.visibility = "hidden";
                sourceInputTxt.value = "";
                destinationInputTxt.value = "";
                map.panTo(currentLocation);
                map.setZoom(16);
                closeModal.onclick = function() {
                    popupForDisplayingInvalidRoutes.style.display = "none";

                  }
                window.onclick = function(event) {
                    if (event.target == popupForDisplayingInvalidRoutes) {
                        popupForDisplayingInvalidRoutes.style.display = "none";
                    }
                }

            }
        
            
    } 
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET","busarray.json", true);
    xhttp.send();
    clearMarkers();
    var icon = {
        url: "marker.png", // url
        scaledSize: new google.maps.Size(30, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(15, 20) // anchor
    };
    marker = new google.maps.Marker({
        position: currentLocation,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon : icon
    });

   
    markers.push(marker);
}
// function toggle(){                              //function is called when the search icon is clicked to toggle the icons
//     searchForBusNumber.style.visibility = "hidden";         //when the search icon is clicked ,it dissapears and the close icon appears.
//     close.style.visibility="visible";
// }
// function noDisplay(){    
//     //when the close icon is clicked,this function is called .
//     searchTextContainer.style.visibility = "visible";
//     searchForBusNumber.style.visibility = "visible";
//     searchContainer.style.visibility = "hidden";
//     labelNav.style.visibility = "hidden";
//     busNumber.value = "";                         //empties the bus number value so that a new value can be clicked.

//     clearMarkers();
    
//     map.setZoom(16);
//     map.panTo(currentLocation);
//     infoWindow.setPosition(currentLocation);
//     infoWindow.setContent('Current Location');
    

// }
function displayTime()
{
    mapping.style.filter = "blur(0px)";
    timeList.style.display = "inline";
    // timeDivision.style.display = "inline";
    routeList.style.display = "none";
    locationDiv.style.display = "none";
    searchResultContainer.style.visibility = "visible";
    map.setZoom(16);
    map.panTo(currentLocation);
    optionsTime.style.backgroundColor = "#C2A9B8";
    optionsLocation.style.backgroundColor = "transparent";
    optionsRoute.style.backgroundColor = "transparent";
}

function requestTime()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        var tms=JSON.parse(this.responseText);
        var itemsInTms=tms.time;
        while(timeList.firstChild) timeList.removeChild(timeList.firstChild);
        for(index in itemsInTms)
        {
            var item = itemsInTms[index];
            createTimeListItem(item);
            
        }
    }

    xhttp.overrideMimeType("application/json");
    var router = busNumber.value;
    xhttp.open("GET",router+"time.json", true);
    
    xhttp.send();
} 

function createTimeListItem(item)
{
    var itemRow = document.createElement('li');
    itemRow.className = "timeRow";
    timeList.appendChild(itemRow);  

    var StartLoc = document.createElement('label');
    StartLoc.className = "startLoc";
    var timeStartTime = document.createElement('label');
    timeStartTime.className = "startTime";
    var div1 = document.createElement('div');
    div1.className = "div1";
    div1.appendChild(StartLoc);
    div1.appendChild(timeStartTime);
    

    var endLoc = document.createElement('label');
    endLoc.className = "endLoc"
    var timeEnd = document.createElement('label');
    timeEnd.className = "endTime";
    var div2 = document.createElement('div');
    div2.className = "div2";
    div2.appendChild(endLoc);
    div2.appendChild(timeEnd);
    
    var div3 = document.createElement('div');
    div3.className = "div3";
    var nearestStop = document.createElement('label');
    nearestStop.className = "nearestStop";
    var nearestStopTime = document.createElement('label');
    nearestStopTime.className = "nearestStopTime";


    div3.appendChild(nearestStop);
    div3.appendChild(nearestStopTime);
    // var div3 = document.createElement('div');
    // div3.className = "div3";
    // div3.appendChild(nearestStop);
    
    // var div4 = document.createElement('div');
    // div4.className = "div4";
    // var line = document.createElement('label');
    // line.className = "vline";
    // div4.appendChild(line);

   
    var holderDiv = document.createElement('div');
    holderDiv.className = "holderDiv";
    holderDiv.appendChild(div1);
    holderDiv.appendChild(div2);
    itemRow.appendChild(div3);
    
    itemRow.appendChild(holderDiv);
    
    
    StartLoc.innerText = item.Location1 + ": ";
    timeStartTime.innerText = item.start ;
    endLoc.innerText = item.location2 + ": ";
    timeEnd.innerText = item.last ;
    // nearestStop.innerText = "Nearest Bus Stop :  " +  findNearestMarker();
    var nearStop = findNearestMarker();
    nearestStop.innerText = "Nearest stop: " + findNearestMarker();
    nearestStopTime.innerText = "Estimated arrival time: " +  item.timing[nearStop];
    
    // nearestStopTime.innerText = item.findNearestMarker;
    // // var imageIcon1 = document.createElement('img');
    // // imageIcon1.className = "imageIcon1";
    // // var imageIcon2 = document.createElement('img');
    // // imageIcon2.className = "imageIcon2";

   

    // // div1.appendChild(timeStart);
    // itemRow.appendChild(timeStartTime);
    // // div2.appendChild(nearestStop);
    // //div4.appendChild(imageIcon1);
    // //div4.appendChild(imageIcon2);
    // itemRow.appendChild(timeEnd);

    // timeStart.innerText = "Departure :     " + item.Location1 ;
    //imageIcon1.src = "dot.jpg";
    //imageIcon2.src = "dot.png";
    //nearestStop.innerHTML ="Nearest Bus Stop :  " + findNearestMarker() + "       "
    // "Nearest Bus Stop :  "
    
    
}

function displayRoute()
{ 
    mapping.style.filter = "blur(0px)";
    timeList.style.display = "none";
    routeList.style.display = "inline";
    locationDiv.style.display = "none";
    searchResultContainer.style.visibility = "visible";
    map.setZoom(12.5);
    map.panTo(currentLocation);
    optionsTime.style.backgroundColor = "transparent";
    optionsLocation.style.backgroundColor = "transparent";
    optionsRoute.style.backgroundColor = "#C2A9B8";

}
   
function requestRoute()
{  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        //if (this.readyState == 4 && this.status == 200)
        //{
            
            var rms=JSON.parse(this.responseText);
            var itemsInRms=rms.items;
            while(routeList.firstChild) routeList.removeChild(routeList.firstChild);
            for(index in itemsInRms)
            {
                var item = itemsInRms[index];
                createRouteListItem(item);
                plotMarkers(item) ;
            }
            // var startLatLong = "" + itemsInRms[0].lat + ", " + itemsInRms[0].lng;
            // var endLatLong = "" + itemsInRms[itemsInRms.length - 1].lat + ", " + itemsInRms[itemsInRms.length - 1].lng;
            // calculateAndDisplayRoute(startLatLong, endLatLong);
            
            busLabel.innerText = rms.bus_number;
            sourceLabel.innerText = itemsInRms[0].bus_route;
            destinationLabel.innerText = itemsInRms[itemsInRms.length - 1].bus_route;
        //}
        requestTime();
        requestLocation();
    } 
    xhttp.overrideMimeType("application/json");
    var router = busNumber.value;
    xhttp.open("GET",router+".json", true);
    //xhttp.open("GET","required website",true);
    xhttp.send();
    arrayOfPath = [];
}

function createRouteListItem(item){
    

    var tableRow = document.createElement('li');
    routeList.appendChild(tableRow);

    var division = document.createElement('div');
    tableRow.appendChild(division);

    var contextLabel = document.createElement('label');
    division.appendChild(contextLabel);

    var dateLabel = document.createElement('Label');
    division.appendChild(dateLabel);

    var excerptLabel = document.createElement('label');
    division.appendChild(excerptLabel);
    
    var iconImage = document.createElement('img');
    
    tableRow.appendChild(division);
    tableRow.appendChild(iconImage);

    excerptLabel.innerText = item.description; //item.bus_route;
    contextLabel.innerText = item.bus_route;
    dateLabel.innerText = "Rating : " +  item.rating;
    iconImage.src = item.img.src;
    // switch(index)
    // {
    //     case index: iconImage.src = imageArray[index];break;
    //     case index: iconImage.src = imageArray[index];break;
    //     case index: iconImage.src = imageArray[index];break;
    //     case index: iconImage.src = imageArray[index];break;
    //     case index: iconImage.src = imageArray[index];break;
    //     case index: iconImage.src = imageArray[index];break;
    //     case index: iconImage.src = imageArray[index];break;
    //     default: iconImage.src = imageArray[0];   
    // }
    //iconImage.src = item.img.src;
    division.className = "division";
    //divContext.className = "divContext";
    //divExcerpt.className = "divExcerpt";
    iconImage.className = "divImg";
    tableRow.className="table_row";
    dateLabel.className="date";
    excerptLabel.className="excerpt";
    contextLabel.className="Context";
    //iconImage.className="Table_image";
    
    //iconImage.onclick =  selectList(item);                           
        
    tableRow.addEventListener('click', selectList(item));
}
 
function displayLocation()
{
    timeList.style.display = "none";
    routeList.style.display = "none";
    locationDiv.style.display = "inline";
    searchResultContainer.style.visibility = "visible";
    mapping.style.filter = "blur(3px)";
    setTimeout(function(){ mapping.style.filter = "blur(0px)"; }, 4000);
    map.setZoom(16);
    map.panTo(currentLocation);
    optionsTime.style.backgroundColor = "transparent";
    optionsLocation.style.backgroundColor = "#C2A9B8";
    optionsRoute.style.backgroundColor = "transparent";
}

function requestLocation(){ 

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {

        today = new Date();
        time = today.getHours() + ":" + String(today.getMinutes()).padStart(2, "0");
        
        var tms=JSON.parse(this.responseText);
        var itemsInTms=tms.time;
        nearestMarker = findNearestMarker();
        for(index in itemsInTms)
        {
            var item = itemsInTms[index];
            //assuming nearest stop is chrompet
            var timeDifference = findTimeDifference(time, item.timing[nearestMarker]);
            if(timeDifference < 0) { //Find previous slot
                prevSlot.currentTime = time;
                prevSlot.actualBusTime = item.timing[nearestMarker];
                prevSlot.departuredAt = -(timeDifference);
                
            }
            else if(timeDifference > 0) 
            { //Find Next slot
                if(nextSlot.currentTime == "") 
                {
                    nextSlot.currentTime = time;
                    nextSlot.actualBusTime = item.timing[nearestMarker];
                    nextSlot.willArriveIn = timeDifference;
                    
                }
            }
            
        }
        
        var stopText = nearestMarker;
        var deptText = prevSlot.departuredAt;
        var arrivalText = nextSlot.willArriveIn;
        
        stop.innerText = stopText;
        dept.innerText= deptText;
        arrival.innerText = arrivalText;
        
        //createInfoWindow(nearestMarker, stopText, deptText, arrivalText);
    }
        xhttp.overrideMimeType("application/json");
        var router = document.getElementById("bus_Number").value;
        xhttp.open("GET",router+"time.json", true);
        xhttp.send();
}



function findTimeDifference(start, end) 
{
    var actual = new Date('1970-01-01T' + start);
    var current = new Date('1970-01-01T' + end);
    
    // var diff = Math.abs(end.getTime() - start.getTime());

    var diff = (current.getTime() - actual.getTime());
    var resultInMinutes = Math.round(diff / 60000);
    return resultInMinutes;
}

function findNearestMarker(){
    var minDist = getDistanceFromCurrentLocation(arrayOfPath[0]),
    busStop = '*None*',
    markerDist,
    i;

  // iterate over objects and calculate distance between them
  for (i = 0; i < arrayOfPath.length; i += 1) 
  {
    markerDist = getDistanceFromCurrentLocation(arrayOfPath[i]);
    if (markerDist <= minDist) {
      minDist = markerDist;
      busStop = arrayOfPath[i].bus_route;

    }
    
  }
 
  return busStop;
}

var rad = function(x) {
    return x * Math.PI / 180;
};

function getDistanceFromCurrentLocation(destination) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(destination.lat - currentLocation.lat);
    var dLong = rad(destination.lng - currentLocation.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(currentLocation.lat)) * Math.cos(rad(destination.lat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c;
    return distance;
}


function selectList(data) {   //this function is for zooming to particular location when a particular list item is
    return function() {
        //since lat lang are in the form of string and u have to conver them to float values
        var latitude = parseFloat(data.lat);
        var longitude = parseFloat(data.lng);
        var location= {lat : latitude,lng : longitude};
        map.setZoom(20);
        map.panTo(location);
       
    }
}

function plotMarkers(data) {
    //since lat lang are in the form of string and u have to conver them to float values
    var latitude = parseFloat(data.lat);
    var longitude = parseFloat(data.lng);
    var location = new google.maps.LatLng(latitude, longitude);

    var icon = {
        url: "marker.png", // url
        scaledSize: new google.maps.Size(30, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(15, 20) // anchor
    };
    marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP,
        title : data.bus_route + " Bus stop",
        icon : icon
    });
    google.maps.event.addListener(marker, 'click', function() {
        
        map.setZoom(17);
        map.setCenter(this.getPosition());
        infoWindow.setContent(data.bus_route + " bus stop");
        infoWindow.open( map,this);
        
      });
    
    // marker.setIcon('http://maps.google.com/mapfiles/ms/icons/purple-dot.png');
    
    arrayOfPath.push({bus_route: data.bus_route, time: data.time, lat: latitude, lng: longitude},)
    markers.push(marker);
    // var infoWindowId = "infoWindow_" + data.bus_route.replace(/\s/g, '_');
    // var infowindow = new google.maps.InfoWindow({
    //     content: "<div id='" +  infoWindowId  + "'></div>"
    //   });
    // marker.addListener('click', function() {
    //     infowindow.open(map, marker);
    // });
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);

    }
    
  }
  
  function clearMarkers() {
    setMapOnAll(null);
    markers = [];
  }
  
  function requestTime2(number){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        var tms=JSON.parse(this.responseText);
        var itemsInTms=tms.time;
        while(timeList2.firstChild) timeList2.removeChild(timeList2.firstChild);
        while(timeList.firstChild) timeList.removeChild(timeList.firstChild);
        for(index in itemsInTms)
        {
            var item = itemsInTms[index];
            createTimeListItem(item);
            
        }
    }

    xhttp.overrideMimeType("application/json");
    xhttp.open("GET",number+"time.json", true);
    
    xhttp.send();
  }
 
  function requestRoute2(number){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        //if (this.readyState == 4 && this.status == 200)
        //{
            
            var rms=JSON.parse(this.responseText);
            var itemsInRms=rms.items;
            while(routeList.firstChild) routeList.removeChild(routeList.firstChild);
            while(routeList2.firstChild) routeList2.removeChild(routeList2.firstChild);
           
            for(index in itemsInRms)
            {
                var item = itemsInRms[index];
                createRouteListItem(item);
                plotMarkers(item) ;
            }
            // var startLatLong = "" + itemsInRms[0].lat + ", " + itemsInRms[0].lng;
            // var endLatLong = "" + itemsInRms[itemsInRms.length - 1].lat + ", " + itemsInRms[itemsInRms.length - 1].lng;
            // calculateAndDisplayRoute(startLatLong, endLatLong);
            
            busLabel.innerText = rms.bus_number;
            sourceLabel.innerText = itemsInRms[0].bus_route;
            destinationLabel.innerText = itemsInRms[itemsInRms.length - 1].bus_route;
        //}
        requestTime2(number);
        requestLocation2(number);
        displayLocation2();
    } 
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET",number+".json", true);
    //xhttp.open("GET","required website",true);
    xhttp.send();
    arrayOfPath = [];
  }
 
function requestLocation2(number){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {

        today = new Date();
        time = today.getHours() + ":" + String(today.getMinutes()).padStart(2, "0");
        
        var tms=JSON.parse(this.responseText);
        var itemsInTms=tms.time;
        nearestMarker = findNearestMarker();
        for(index in itemsInTms)
        {
            var item = itemsInTms[index];
            //assuming nearest stop is chrompet
            var timeDifference = findTimeDifference(time, item.timing[nearestMarker]);
            if(timeDifference < 0) { //Find previous slot
                prevSlot.currentTime = time;
                prevSlot.actualBusTime = item.timing[nearestMarker];
                prevSlot.departuredAt = -(timeDifference);
                
            }
            else if(timeDifference > 0) 
            { //Find Next slot
                if(nextSlot.currentTime == "") 
                {
                    nextSlot.currentTime = time;
                    nextSlot.actualBusTime = item.timing[nearestMarker];
                    nextSlot.willArriveIn = timeDifference;
                    
                }
            }
            
        }
        
        var stopText = nearestMarker;
        var deptText = prevSlot.departuredAt;
        var arrivalText = nextSlot.willArriveIn;
        
        stop.innerText = stopText;
        dept.innerText= deptText;
        arrival.innerText = arrivalText;
        
        //createInfoWindow(nearestMarker, stopText, deptText, arrivalText);
    }
        xhttp.overrideMimeType("application/json");
        xhttp.open("GET",number+"time.json", true);
        xhttp.send();
  }
  function displayTime2(){
    mapping.style.filter = "blur(0px)";
    timeList.style.display = "inline";
    // timeDivision.style.display = "inline";
    routeList.style.display = "none";
    locationList.style.display = "none";
    searchResultContainer.style.visibility = "visible";
    map.setZoom(15);
    map.panTo(currentLocation);
    optionsTime.style.backgroundColor = "#C2A9B8";
    optionsLocation.style.backgroundColor = "transparent";
    optionsRoute.style.backgroundColor = "transparent";

  }
  function displayRoute2(){
    mapping.style.filter = "blur(0px)";
    timeList.style.display = "none";
    routeList.style.display = "inline";
    locationList.style.display = "none";
    searchResultContainer.style.visibility = "visible";
    map.setZoom(12.5);
    map.panTo(currentLocation);
    optionsTime.style.backgroundColor = "transparent";
    optionsLocation.style.backgroundColor = "transparent";
    optionsRoute.style.backgroundColor = "#C2A9B8";

  }
  function displayLocation2(){
    mapping.style.filter = "blur(3px)";
    setTimeout(function(){ mapping.style.filter = "blur(0px)"; }, 4000);
    timeList.style.display = "none";
    routeList.style.display = "none";
    locationList.style.display = "inline";
    searchResultContainer.style.visibility = "visible";
    map.setZoom(15);
    map.panTo(currentLocation);
    optionsTime.style.backgroundColor = "transparent";
    optionsLocation.style.backgroundColor = "#C2A9B8";
    optionsRoute.style.backgroundColor = "transparent";

  }