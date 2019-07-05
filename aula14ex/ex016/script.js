document.getElementById("contar").addEventListener("click", () => {
  var inicio = document.getElementById("inicio").value;
  var fim = document.getElementById("fim").value;
  var passo = document.getElementById("passo").value;
  var divResult = document.getElementById("result");

  divResult.innerText = "";

  if (inicio == "" || fim == "" || passo == "") {
    divResult.innerHTML = "<p>Impossível contar!</p><br>";
  } else {
    divResult.innerHTML = "<p>Contando:</p><br>";
    inicio = Number(inicio);
    fim = Number(fim);
    passo = Number(passo);

    if (passo <= 0) {
      alert("Passo inválido! Considerando PASSO 1");
      passo = Number(1);
    }

    if (inicio < fim) {
      for (var i = inicio; i <= fim; i += passo) {
        divResult.innerText += `${String(i)} ${String.fromCodePoint(0x1f449)} `;
      }
    } else {
      for (var i = inicio; i >= fim; i -= passo) {
        divResult.innerText += `${String(i)} ${String.fromCodePoint(0x1f449)} `;
      }
    }

    divResult.innerText += `${String.fromCodePoint(0x1f3f4)}`;
  }
});
