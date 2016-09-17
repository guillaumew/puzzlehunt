var clickOnChest = function () {
  if (!top.objets[4].was_found) {
    var
      modal = document.getElementById('myModal'),
      span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  } else {
    alert('Vous avez déjà ouvert ce coffre.');
  }
}

var changeCoffreValue = function (id) {
  var
    oldValue = parseInt(document.getElementById("code-number" + id).innerHTML),
    newValue = oldValue + 1 > 9 ? 0 : oldValue + 1;

  document.getElementById("code-number" + id).innerHTML = newValue;

  // Now we check the whole combination

  var
    tmpId = 1,
    combination = '';

  while (tmpId <= 4) {
    combination += document.getElementById("code-number" + tmpId).innerHTML;
    tmpId += 1;
  }

  if (combination === "8352") {
    document.getElementById('myModal').style.display = "none";
    top.addObject(4);
  }
}
