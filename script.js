//Demonstração de declaração de variavel e coleta de elementos do DOM (arquivo html do qual está associado ao script).

const click1 = document.getElementById('click1');
const elemento = document.querySelector('#click2');
const elemento2 = document.querySelector('a');

console.log(elemento2);

//Eventos
click1.addEventListener('click', annaELinda);

function annaELinda() {
    console.log('Anna Luíza é muito linda!');
}

const funcao =()=> {
    console.log('oi');
}