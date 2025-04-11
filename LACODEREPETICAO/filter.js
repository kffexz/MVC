const numeros = [1,2,3,4,5,6];
const pares = [];
for(cont =  0; cont < numeros.length; cont ++){ 
    if( numeros[cont]  % 2 === 0){ // verdadeiro
        pares.push(numeros[cont]);        
    }
}
console.log(pares);
const numeros2 = [1,2,3,4,5,6];
const pares2 = numeros2.filter( numero => numero % 2 === 0 );
console.log(pares2);