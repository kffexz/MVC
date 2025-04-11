const numeros = [1,2,3,4,5];

const dobrados = [];

for(cont =  0; cont < numeros.length; cont ++){ 
    dobrados.push(numeros[cont] * 2);
}
console.log(dobrados);

const numeros2 = [1,2,3,4,5];

const dobrados2 = numeros2.map( numero => numero * 2 );

console.log(dobrados2);
