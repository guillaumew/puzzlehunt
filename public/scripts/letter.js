var
  rotateList = [0],
  tabDegree = [0, 90, 180, 270],
  i = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

while (i < 4) {
  var el = document.getElementById('piece' + (i + 1));

  rotateList.push(tabDegree[getRandomIntInclusive(0, 3)]);
  el.className = 'rotate' + rotateList[i + 1];
  i++;
}

if (top.objets[1].solved === false && top.objets[5].was_found > 0) {
  var rotatePiece = function (id) {

    if (top.objets[1].solved === false && top.objets[5].was_found > 0) {
      var el = document.getElementById('piece' + id);

      if (!rotateList[id]) {
        rotateList[id] = 0;
      }
      rotateList[id] = rotateList[id] + 90 === 360 ? 0 : rotateList[id] + 90;
      el.className = "rotate" + rotateList[id];

      var flag = false;
      for (var i = 0; i < rotateList.length; i++) {
        if (rotateList[i]) {
          flag = true;
        }
      }

      if (!flag) {
        top.objets[1].solved = true;
        var el = document.getElementById("content");
        top.openPlace(4);
        top.openPlace(5);
        el.innerHTML = "<img src='/img/lettreProprioVerne.jpg'>";
      }
    }
  }
} else if (top.objets[1].solved === true) {
        var el = document.getElementById("content");

  el.innerHTML = "<img src='/img/lettreProprioVerne.jpg'>";
} else {
        var el = document.getElementById("content");

  el.innerHTML = "<p>Vous devez trouvez 3 tas de papiers déchirés pour pouvoir les rassembler.</p>";
}
