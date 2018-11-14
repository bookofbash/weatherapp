$(document).ready(function(){

  //location data
  $.getJSON('https://json.geoiplookup.io/?callback=?', function(json) {
    console.log(JSON.stringify(json, null, 2));
    var cityName = json.city;
    var countryCode = json.country_code;
    var long =json.longitude;
    var lata =json.latitude;
    $(".city").html(cityName +"," + " " + countryCode);
    $("#longitude").html(long);
    $("#latitude").html(lata);
    //weather data
    var weatherApi="https://api.darksky.net/forecast/828c0751c2c936d0ad20d8d3fb06dc53/" + lata + "," + long;
   $.getJSON(weatherApi + "?callback=?", function(data) {
     console.log(weatherApi);
      //set tempC as current temperature. Use parseInt to remove float
     console.log (data);
   var tempF = parseInt((data.currently.temperature))+"&deg; F";
   var tempC = parseInt((parseInt(tempF) - 32) * (5/9))+ " &deg;C";
   var icon = data.currently.icon;
   var description = data.minutely.summary;
   $("#description").append(description);
   $("#temperatureF").html(tempF);
   $("#temperatureC").html(tempC);
   
       //Set skycon color
 var skycons = new Skycons({"color": "pink"});
     //sycons icon will match with icon from darksksy
     if (icon =="partly-cloudy-day"){
  var pcd = skycons.set("icon1", Skycons.PARTLY_CLOUDY_DAY);
     };
     if (icon =="clear-day"){
  var cd =skycons.set("icon1", Skycons.CLEAR_DAY);
     };
     if(icon=="clear-night"){
  var clearNight =skycons.set("icon1", Skycons.CLEAR_NIGHT);
     };
     if(icon=="partly-cloudy-night"){
  var pcn =skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
     };
     if(icon=="rain"){
  var rain =skycons.set("icon1", Skycons.RAIN);
     };
     if(icon=="snow"){
  var snow =skycons.set("icon1", Skycons.SNOW);
     };
     if(icon=="sleet"){
  var sleet =skycons.set("icon1", Skycons.SLEET);
     };
  skycons.play();
  });
  });
  //Toggle for Farenhight to Celcius
  $("#circle").click(function(){
    $(".temp").slideToggle();
    
  });
});



//Works in Edge 6.03.17
//Doesn't work in Firefox 6.03.17
//Works on Chrome 6.04.17