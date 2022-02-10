numero(10);

function numero(valor) {
  let multDe3 = 0;
  let multDe5 = 0;

  for (i = 0; i <= valor; i++) {

    if (i % 3 === 0)
    multDe3 += i;

    if (i % 5 === 0)
    multDe5 += i;

  }

  console.log(multDe3 + multDe5);

}