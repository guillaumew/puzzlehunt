var rotateList = [];

var rotatePiece = function (id) {
  var el = document.getElementById('piece' + id);

  if (!rotateList[id]) {
    rotateList[id] = 0;
  }
  rotateList[id] = rotateList[id] + 90 === 360 ? 0 : rotateList[id] + 90;
  el.className = "rotate" + rotateList[id];
}
