function openPlace(index) {
	places[index].is_findable = true;
	try{
		document.cookie = "places="+JSON.stringify(places);
	} catch(e){
		console.log(e);	
	}
	
}

function addObject(index, force=false) {
	obj = objets[index];
	if(obj.was_found === 0 || force){
		var a_el = document.createElement("a");
		a_el.href = obj.url;
		a_el.setAttribute("target", "content");
		var img_el = document.createElement("img");
		img_el.src=obj.thumb;
		a_el.appendChild(img_el);
		document.getElementById("oye-object").appendChild(a_el);
	}
	if(!force){
		objets[index].was_found++;
	}
	try{
		document.cookie = "objets="+JSON.stringify(objets);
	} catch(e){
		console.log(e);
	}
	
}

var cookieObjets, cookiePlaces;

try{
	cookiePlaces = document.cookie.replace(/(?:(?:^|.*;\s*)places\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	cookieObjets = document.cookie.replace(/(?:(?:^|.*;\s*)objets\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}catch(e){
	console.log(e);
}



if(cookiePlaces.length>0){
	var places = JSON.parse(cookiePlaces);
}else{
	var places = [
{
	"name" : "Appartement Elie",
	"adresse" : "4, rue Bâtonnier Guinaudeau, 44 000 Nantes",
	"latitude" : 47.2102543,
	"longitude" : -1.566128899999967,
	"is_findable" : true,
	"was_found" : false,
	"url" : "/elie"
},
{
	"name" : "Appartement Romain",
	"adresse" : "5, rue Voltaire, 44 000 Nantes",
	"latitude" : 47.2124513,
	"longitude" : -1.5640725000000657,
	"is_findable" : true,
	"was_found" : false,
	"url" : "/romain"
},
{
	"name" : "Machines de l'île",
	"adresse" : "Parc des Chantiers, Boulevard Léon Bureau, 44200 Nantes",
	"latitude" : 47.205581,
	"longitude" : -1.5640409999999747,
	"is_findable" : false,
	"was_found" : false,
	"url" : "/machines"
},
{
	"name" : "Appartement Jules Vernes",
	"adresse" : "38 Rue La Noue Bras de Fer, 44200 Nantes",
	"latitude" : 47.2068425,
	"longitude" : -1.5638241000000335,
	"is_findable" : false,
	"was_found" : false,
	"url" : "/verne"
},
{
	"name" : "Appartement Remy",
	"adresse" : "4 Place Graslin, 44000 Nantes",
	"latitude" : 47.212764,
	"longitude" : -1.562137000000007,
	"is_findable" : false,
	"was_found" : false,
	"url" : "/remy"
},
{
	"name" : "Bar Melocotton",
	"adresse" : "9 Rue de l'Héronnière, 44000 Nantes",
	"latitude" : 47.211993,
	"longitude" : -1.5618130000000292,
	"is_findable" : false,
	"was_found" : false,
	"url" : "/melocotton"
},
{
	"name" : "Aux Merveilleux",
	"adresse" : "6 Rue Franklin, 44000 Nantes",
	"latitude" : 47.214199,
	"longitude" : -1.5633279999999559,
	"is_findable" : false,
	"was_found" : false,
	"url" : "/merveilleux"
}
];
}

if(cookieObjets.length>0){
	var objets = JSON.parse(cookieObjets);
	for(var i=0;i<objets.length;i++){
		if(objets[i].was_found>0){
			addObject(i,true);
		}
	}
}else{

var objets = [
{
	"name" : "Lettre de Elie à Romain",
	"url" : "/lettreElieRomain",
	"thumb" : "/img/lettreElieRomain_thumb.jpg",
	"was_found" : 0,
	"number_to_find" : 1
},
{
	"name" : "Lettre du proriétaire à Verne",
	"url" : "/lettreProprioVerne",
	"thumb" : "/img/lettreProprioVerne_thumb.jpg",
	"was_found" : 0,
	"number_to_find" : 3,
	"solved" : false
},
{
	"name" : "Clé du garage d'Elie",
	"url" : "/clegarage",
	"thumb" : "/img/clegarage_thumb.jpg",
	"was_found" : 0,
	"number_to_find" : 1
},
{
	"name" : "Coffre à combinaison",
	"url" : "/coffre",
	"thumb" : "/img/coffre_thumb.jpg",
	"was_found" : 0,
	"number_to_find" : 1
},
{
	"name" : "Bouteille d'absinthe \"Sauvage\"",
	"url" : "/absinthe",
	"thumb" : "/img/absinthe_thumb.jpg",
	"was_found" : 0,
	"number_to_find" : 1
},
{
	"name" : "Note de Jules Verne",
	"url" : "/noteVerne",
	"thumb" : "/img/note_verne_thumb.jpg",
	"was_found" : 0,
	"number_to_find" : 1
}
];
}

// Fakeing position using URL params
var params = {};

if (location.search) {
    var parts = location.search.substring(1).split('&');

    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || true;
    }
}

function isPlaceFound(){
	function errorPostion(err){
		alert(err);
	}

	function displayPosition(position){
		for(var i =0;i<places.length;i++){
			if(places[i].is_findable){
				if(params.lat && params.long){
					var lat_place1 = params.lat;
					var long_place1 = params.long;
				}else{
					var lat_place1 = position.coords.latitude;
					var long_place1 = position.coords.longitude;
				}
				var lat_place2 = places[i].latitude;
				var long_place2 = places[i].longitude;
				var distance =  Math.acos(Math.sin(lat_place1 * Math.PI / 180)*Math.sin((Math.PI / 180 * lat_place2))+Math.cos((Math.PI / 180 * lat_place1))*Math.cos((Math.PI / 180 * lat_place2))*Math.cos(Math.PI / 180 * (long_place1-long_place2)))*6371 ;
				console.log(places[i].name + " est à " + distance + " km.")
				if(distance<0.03){
					document.getElementById("oye-frame").src=places[i].url;
					break;
				}
			}
		}
	}
	navigator.geolocation.getCurrentPosition(displayPosition,errorPostion,{timeout:10000});
}

var looking = setInterval(isPlaceFound,2000);
