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
}];

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
	"number_to_find" : 3
},
{
	"name" : "Clé du garage d'Elie",
	"url" : "/clegarage",
	"thumb" : "/img/clegarage_thumb.jpg",
	"was_found" : 0,
	"number_to_find" : 1
}
];

function addObject(index) {
	obj = objets[index];
	if(obj.was_found === 0){
		objets[index].was_found++;
		var a_el = document.createElement("a");
		a_el.href = obj.url;
		a_el.setAttribute("target", "content");
		var img_el = document.createElement("img");
		img_el.src=obj.thumb;
		a_el.appendChild(img_el);
		document.getElementById("oye-object").appendChild(a_el);
	}
}
