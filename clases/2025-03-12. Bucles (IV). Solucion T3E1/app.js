// Modelo A
let totalPar = 0;
for(let i = 3; i < 9; i++){
    if(i % 2 == 0){
        totalPar++;
        if(totalPar == 2){
            console.log(`${i} es el segundo número par`);
        }
    }
}

// Modelo B
let multiploTres = 0;
for(let i = 40; i < 49; i++){
    if(i % 3 == 0){
        multiploTres++;
        if(multiploTres == 3){
            console.log(`${i} es el tercer múltiplo de 3`);
        }
    }
}