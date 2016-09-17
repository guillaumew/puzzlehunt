var places =[
{
	"name" : "Appartement Elie",
	"adresse" : "4, rue Bâtonnier Guinaudeau, 44 000 Nantes",
	"latitude" : 47.2102543,
	"longitude" : -1.566128899999967,
	"is_findable" : true,
	"was_found" : false,
	"url" : "/elie"
}];

var objets = [
{
	"name" : "Lettre de Elie à Romain",
	"url" : "/lettreElieRomain",
	"thumb" : "/img/lettreElieRomain_thumb.jpg",
	"was_found" : true
}];

function addObject(obj) {
	var a_el = document.createElement("a");
	a_el.href = obj.url;
	a_el.setAttribute("target", "content");
	var img_el = document.createElement("img");
	img_el.src=obj.thumb;
	a_el.appendChild(img_el);
	document.getElementById("oye-object").appendChild(a_el);
}