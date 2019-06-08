function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    img.src = "./beautiful-beautiful-morning-beautiful-nature-2240000.jpg";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "./afternoon-farmer-field-33065.jpg";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "./animal-branch-cat-35888.jpg";
    document.body.style.background = "#515154";
  }
}
