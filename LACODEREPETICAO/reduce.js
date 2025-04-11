const numeros = [1,2,3,4,5];
let soma = 0;
for(cont =  0; cont < numeros.length; cont ++){    
    soma += numeros[cont];
}
console.log(soma);

const numeros2 = [1,2,3,4,5];

const soma2 =
 numeros.reduce((acumulador,valorAtual) => acumulador + valorAtual,0);

 console.log(soma2);
