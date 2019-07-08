document.querySelector("input#submit").addEventListener("click", () => {
  var anoNascimento = document.getElementById("anoNascimento").value;
  var data = new Date();
  var ano = data.getFullYear();
  var result = document.getElementById("res");

  console.log(typeof anoNascimento);
  if (anoNascimento != "" && Number(anoNascimento) <= ano) {
    var idade = ano - Number(anoNascimento);
    var sexo = document.getElementsByName("sexo");
    var genero = "";

    var imagem = document.createElement("img");

    if (sexo[0].checked) {
      genero = "Homem";

      if (idade < 10) {
        imagem.setAttribute("src", "./img/baby-homem.jpg");
      } else if (idade < 21) {
        imagem.setAttribute("src", "./img/adolescente-homem.jpg");
      } else if (idade < 50) {
        imagem.setAttribute("src", "./img/adulto-homem.jpg");
      } else {
        imagem.setAttribute("src", "./img/idoso-homem.jpg");
      }
    } else {
      genero = "Mulher";

      if (idade < 10) {
        imagem.setAttribute("src", "./img/baby-girl.jpg");
      } else if (idade < 21) {
        imagem.setAttribute("src", "./img/adolescente-mulher.jpg");
      } else if (idade < 50) {
        imagem.setAttribute("src", "./img/adulto-mulher.jpg");
      } else {
        imagem.setAttribute("src", "./img/idoso-mulher.jpg");
      }
    }

    result.style.textAlign = "center";
    result.innerHTML = `Detectamos ${genero} com ${idade} anos`;

    result.appendChild(imagem);
  } else {
    alert("[ERRO] verifique os dados e tente novamente!");
  }
});
