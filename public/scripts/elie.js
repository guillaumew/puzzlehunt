var
  places = top.places,
  objets = top.objets,
  key = objets[2],
  isInArea = true;

if (isInArea)
{
  if (key.was_found) {
    document.getElementById('text').innerHTML = 'La clef a été trouvée';
  } else {
    document.getElementById('text').innerHTML = 'La clef n\'a pas été trouvée';
  }
}
