let array = ['string', 1, true]; 
//pode receber vários tipos de dados e outros arrays

console.log(array[0]) // acessa indice do array

// metodos para manipular

//for each: itera um array;
array.forEach(function(item, index){console.log(item, indice)})

//push() – add item no final do array;
array.push('novo item');

// pop() – remove item no final do array;
array.pop();

// shift() – remove item no início do array;
array.shift();

// unshift() – add item no início do array;
array.unshift('novo item inicio');

// indexOf() – retorna o índice de um valor;
console.log(array.indexOf(true));

//splice() – remove ou substitui um item pelo índice;
array.splice(0, 3);

//slice() – retorna uma parte de um array existente;
let novoArray = array.slice(0,3);


// objetos
let objeto = {string: 'string', number: 1, Boolean: true, array: [array]}
console.log(objeto.array); // acessa o array dentro do obj

var string = objeto.string

var arrasy = objeto.array

var {string, Boolean} = objeto