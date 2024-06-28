//Vou demonstrar como voce faria para criar um elemento HTML com javaScript 

//passo 1 - criar variavel
let textoCriado;

//passo 2 - criar o ELEMENTO que vai ser sua variavel (Ancora, titulo, paragrafo etc).
textoCriado = document.createElement('a');

//passo 3 - criar o texto de seu elemento HTML
textoCriado.innerHTML = 'Isto é um exemplo!';

//passo 4 - pegar o elemento que terá este elemento criado (POR EXEMPLO: você sabe que se temos uma ancora dentro de uma div, ancora é FILHO da div seguindo essa lógica precisamos adicionar o elemento criado ao nosso HTML dessa maneira:)
const divisaoOndeOTextoEstaContido = document.getElementById('divisao');

divisaoOndeOTextoEstaContido.appendChild(textoCriado);

//pode me perguntar se tiver dúvidas