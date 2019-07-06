let num = [1, 4, 6, 2, 5];

num.push(3);

num.sort();

//console.log(`Nosso vetor é ${num}`);
//console.log(`Tamanho do vetor ${num.length}`);
/*
for (var i = 0; i < num.length; i++) {
  console.log(`Posição [${i}] = ${num[i]}`);
}
*/

/*
for (let pos in num) {
  console.log(`Posição [${pos}] = ${num[pos]}`);
}*/

let pos = num.indexOf(6);

if (pos == -1) {
  console.log(`O valor não foi encontrado`);
} else {
  console.log(`A posição do válor 6 é ${pos}`);
}
