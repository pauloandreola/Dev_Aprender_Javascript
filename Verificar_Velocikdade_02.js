// Velocidade máxima de até 70 Km
// A cada 5KM acima do limite você ganha 1 ponto
// Usando o Math.Floor() para arrendondar as casas decimais
// Caso tenha mais de 12 pontos na carteira  imprimir "Carteira Suspendida"
// Para 12 pontos 130 km
// PARA MIM ESTE CÕDIGO NÃO ESTÁ COEZO, NÃO ESTA SEGUINDO O QUE SE PEDE
// A PONTUAÇÃO EXIGE MAIS DE 12 PONTOS E NÃO 12 PONTOS PARA CIMA

verificarVelocidade(131)

function verificarVelocidade(velocidade) {

const velocidadeLimite = 70;
const KmPorPonto = 5;

  if (velocidade <= velocidadeLimite)
 
    console.log('Ok');
 
  else  {

    const pontos = Math.floor((velocidade - velocidadeLimite) / 5);
   
    if(pontos >= 12)
      
      console.log('Carteira suspensa');
    
    else

      console.log('Pontos',pontos);
  
  } 

}