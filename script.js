var map = L.map('map').setView([39.75621,-104.99404], 4);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

var arch = L.marker([38.624691, 	-90.184776]).addTo(map);
var jewelBox = L.marker([38.6350517, -90.2801139 ]).addTo(map);
var eadsBridge = L.marker([38.62894, -90.178722]).addTo(map);
var homeDepotKingshighway = L.marker([38.601590, -90.267900]).addTo(map);
var frontenacMall = L.marker([38.630110, -90.407320]).addTo(map);

arch.bindPopup("<b>Location 1</b><br>St. Louis Arch")
jewelBox.bindPopup("<b>Location 2</<b><br>The Jewel Box")
eadsBridge.bindPopup("<b>Location 3</b<br> Eads bridge")
homeDepotKingshighway.bindPopup("<b>Location 4</b<br> My favorite homedepot")
frontenacMall,bindPopup("<b>Location 5</<br> Frontenac Mall")