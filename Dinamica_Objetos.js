const mouse = {

  cor : 'red',
  marca : 'Genius',

}

// Incluindo uma nova propiedade no objeto mouse 
mouse.velocidade = 5000;  

// Incluindo um método no objeto mouse
mouse.trocarDPI = function() {

  console.log('mudando DPI');

}

console.log(mouse);

// Deletando a propriedade e a função do objeto mouse
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);