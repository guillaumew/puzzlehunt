top.clearInterval(top.looking);
var
  places = top.places,
  objets = top.objets,
  key = objets[2],
  isInArea = true;

if (isInArea)
{
  if (key.was_found) {
    document.getElementById('text').innerHTML = "<p>Tu trouves facilement le garage dont t'avais parlé Romain. Tu ouvres le garage... qui est presque totalement vide !</p><p>Tu vois un petit coffre dans un coin. C'est sûrement celui dont parlait Elie dans sa lettre. A coté de ce coffre, des morceaux de feuille déchirée.</p>"
    top.addObject(1);
    top.addObject(3);
    top.openPlace(2);
  } else {
    document.getElementById('text').innerHTML = "<p>Tu te trouves au pied de l'immeuble de ce fameux Elie qui cherchait le trésor de Jules Verne. Malheureusement, la porte est fermée. Tu essaies de sonner chez les voisins, mais personne ne te répond.</p><p>Il vaut peut-être mieux rendre visite à son ami Romain.</p>";
  }
}
