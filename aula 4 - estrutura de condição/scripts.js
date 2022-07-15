var jogador1 = 0;
var jogador2 = 0;
// if
if(jogador1>0){
    console.log('Jogador 1 marcou ponto')
}else if(joador2>0){
    console.log('Jogador 1 marcou ponto')
} else {
    console.log('não marcou ponto')
}
// while
var a = 0;
while (a < 10) {
a++;
console.log(a);
}
// do while
var a = 0;
do {
a++;
console.log(a);
} while (a < 10)
// switch case
switch ({expressao}) {
    case 1:
    {instrucao};
    break;
    case 2:
    {instrução};
    break;
    }
 // for   
    var array = ['valor1', 'valor2', 'valor', 'valor4']

    for (let i = 0; i < array.length; i++) {
    console.log(i);
    }

// for in 
var array = ['valor1', 'valor2', 'valor3', 'valor4']

for (i in array) {
console.log(i);
}
// for of
var array = ['valor1', 'valor2', 'valor3', 'valor4']

for (i of array) {
console.log(i);
}

// for of no object
for (i of object.propriedade) {
    console.log(i);
    }