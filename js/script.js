$(document).ready(function () {
    
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        var geo = {};
        var ip = data.ip.split(",");
        $.getJSON("http://ip-api.com/json/" + ip[0] + "?callback=?", function (location) {
            geo.lat = location.lat;
            geo.lon = location.lon;
            var apiKey = "b7676965c2f735738255427379b7e049";
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + geo.lat + "&lon=" + geo.lon + "&appid=" + apiKey, function (data) {
                $("#city-name").html(data.name);
                var cel =Math.round(data.main.temp - 273);
                $("#cel-value").html(cel+" °C");
            });
        });
    });
    
    var gColor = function () {
        // Generic color
        var red = Math.floor(Math.random() * (255 - 0)) + 0;
        var green = Math.floor(Math.random() * (255 - 0)) + 0;
        var blue = Math.floor(Math.random() * (255 - 0)) + 0;
        var rgb = "rgb(" + red + "," + green + "," + blue + ")";
        var styles = {
            color: rgb,
            transition: "1.5s"
        };
        $(".cloud-icon").css(styles);
    };
    gColor();
    setInterval(gColor, 3000);
    
});