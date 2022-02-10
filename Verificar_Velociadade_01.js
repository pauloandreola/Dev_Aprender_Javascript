// Velocidade máxima de até 70 Km
// A cada 5KM acima do limite você ganha 1 ponto
// Usando o Math.Floor() para arrendondar as casas decimais
// Caso tenha mais de 12 pontos na carteira  imprimir "Carteira Suspendida"
// Para 12 pontos 130 km

verificarVelocidade(130)

function verificarVelocidade(velocidade) {

const velocidadeLimite = 70;
let resultado = velocidade / 5;
let ponto = resultado - 14;

if (ponto > 12) {

  console.log('Carteira suspensa por atingir mais de 12 pontos na carteira. Sua pontuação é de',ponto.toFixed(1));

} else if (velocidade > velocidadeLimite) {

  console.log('Motorista dirigindo em alta velocidade',velocidade,'Km/h. Ganhou',Math.floor(ponto),'pontos na carteira');

} else if (velocidade = velocidadeLimite){

console.log('Motorista dirigindo no limite de velocidade de',velocidade,'Km/h');

} else 

console.log('Motorista dirigindo a baixa velocidade',velocidade,'Km/h');

}