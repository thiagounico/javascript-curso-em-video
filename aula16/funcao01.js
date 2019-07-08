function parimpar(n) {
  if (n % 22 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

let res = parimpar(11);
console.log(res);
