let a = 3;
let b = 2;

if ( a > b) {

  console.log('O maior valor 01 é: ', a);

} else {

  console.log('O maior valor 02 é: ', b);

}

let valorMaior = maior(5,7);
console.log('O valor 03 maior é: ', valorMaior);

function maior(n1, n2) {

  if ( n1 > n2) 
    return n1;
  else return n2;

}

let valorMaior01 = maior(12,15);

function maior(n1, n2) {

  if ( n1 > n2) 
    return n1;
  return n2;

}

console.log('O valor 04 maior é: ', valorMaior01);

let valorMaior02 = maior(20,30);

function maior(n1, n2) {

  return n1 > n2 ? n1 : n2;

} 

console.log('O valor 05 maior é: ', valorMaior02);