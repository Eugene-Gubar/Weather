$(document).ready(function () {
    
    $.getJSON("https://jsonip.com/?callback=?", function (data) {
        var geo = {};
        var ip = data.ip.split(",");
        $.getJSON("https://freegeoip.net/json/" + ip[0] + "?callback=?", function (location) {
            var apiKey = "84ee003417044db6b72174247170503";
            $.getJSON("https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=" + apiKey + "&q=" + location.ip + "&format=json", function (w) {
                $("#city-name").html(location.city);
                $("#cel-value").html(w.data.weather[0].hourly[w.data.weather[0].hourly.length - 1].tempC + " °C");
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