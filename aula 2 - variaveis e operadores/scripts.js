// boulean 

var vOuF = false;
console.log(vOuF)

// number
var num = 1;
console.log(num)

// string
var nome = "nome";
console.log(nome)

// como declarar 
var variavel; //valor nulo
var variavel = 1; // atribui valor
console.log(variavel)

let variavel2 = 'diana';
variavel2 = 'teste' // pode ser alterada depois
console.log(variavel2)

const constante = 'y' // é obrigatorio atribuição na criação
//não pode ser reatribuida
console.log(constante)

//escopo global 
var escopog = 'global';
console.log(escopog)

// escopo local 
function escopol(){
    let escopoInterno = 'local'
    console.log(escopoInterno)
}

escopol()

// == comparação do valor
// === comparação identica, valor e tipo
// retorna true ou false

// adicao
var adicao = 1+1;

// subtração 
var subtração = 1-1;

// multiplicação
var multi = 2*1;

//divisao real 
var divs =2/1;

// resta da divisao 
var resto = 5 % 2;

// potencia
var pow = 2 ** 10;

// e &&
// ou ||
// não !