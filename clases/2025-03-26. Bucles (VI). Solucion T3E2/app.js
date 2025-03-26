let numeros = [3, -2, 7, -2, -1, 9, -7, 5, 6, 2, -2, 0, 9, -5, 2, -3];

let totalNegativos = 0;
let totalPositivos = 0;
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 0){
        totalPositivos++;
    }else{
        totalNegativos++;
        if(totalNegativos <= 3){
            console.log(`${numeros[i]} es el numero negativo ${totalNegativos}`);
        }
    }
}
console.log(`Hay un total de ${totalPositivos} números positivos`);