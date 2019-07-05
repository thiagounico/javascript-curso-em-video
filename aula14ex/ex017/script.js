var btTabuada = document.getElementById("btTabuada");
var selectTabuada = document.getElementById("selectTabuada");

btTabuada.addEventListener("click", () => {
  var numero = document.getElementById("numero").value;

  if (numero == "") {
    alert("Por favor, digite um número!");
  } else {
    selectTabuada.innerText = "";
    for (var i = 1; i <= 10; i++) {
      var item = document.createElement("option");
      item.text = ` ${numero} X ${i} = ${numero * i}`;
      selectTabuada.appendChild(item);
    }
  }
});
