let permissao = 'gerente';

switch (permissao) {
  
  case 'comum':
  console.log('Usuário comum');
  break;
  
  case 'gerente':
  console.log('Usuário Gerente');
  break;

  case 'diretor':
  console.log('Usuário Diretor');
  break;

  case 'tecnico':
  console.log('Usuário Técnico');
  break;

  default:
  console.log('Usuário não reconhecido');
  break;

}