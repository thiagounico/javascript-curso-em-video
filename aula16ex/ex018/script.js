var adicionar = document.getElementById("adicionar");
var finalizar = document.getElementById("finalizar");
var select = document.getElementById("select");
var result = document.getElementById("result");
var array = [];

function inList(number) {
  if (array.indexOf(number) !== -1) {
    return true;
  } else {
    return false;
  }
}

adicionar.addEventListener("click", () => {
  var number = document.getElementById("number");

  if (
    Number(number.value) <= 0 ||
    Number(number.value > 100) ||
    inList(Number(number.value))
  ) {
    alert("Valor inválido ou já encontrado na lista");
  } else {
    array.push(Number(number.value));
    var item = document.createElement("option");
    item.text = `Valor: ${number.value} adicionado`;
    select.appendChild(item);
    result.innerHTML = "";
  }

  number.value = "";
  number.focus();
});

finalizar.addEventListener("click", () => {
  if (array.length == 0) {
    alert("Adicione valores antes de finalizar");
  } else {
    result.innerHTML = "";

    var p1, p2, p3, p4, p5, auxText;
    var p1 = document.createElement("p");
    auxText = document.createTextNode(
      `Ao todo temos ${array.length} elementos cadastrados`
    );
    p1.appendChild(auxText);
    result.appendChild(p1);

    var p2 = document.createElement("p");
    auxText = document.createTextNode(
      `O maior número informado foi ${Math.max(...array)}`
    );
    p2.appendChild(auxText);
    result.appendChild(p2);

    var p3 = document.createElement("p");
    auxText = document.createTextNode(
      `O menor valor informado foi ${Math.min(...array)}`
    );
    p3.appendChild(auxText);
    result.appendChild(p3);

    var p4 = document.createElement("p");
    var sum = array.reduce((previous, current) => (current += previous));
    auxText = document.createTextNode(`Somando todos os valores, temos ${sum}`);
    p4.appendChild(auxText);
    result.appendChild(p4);

    var p5 = document.createElement("p");
    auxText = document.createTextNode(
      `A média dos valores digitados foi ${sum / array.length}`
    );
    p5.appendChild(auxText);
    result.appendChild(p5);
  }
});
