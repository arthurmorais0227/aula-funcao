function maiorDeTres(a, b, c) {
    let forca = [a, b, c];
    let i = 0;
    let maior = forca[0];
    
    while (i < forca.length) {
        if(forca[i] > maior){
            maior = forca[i];
        }
        i++;
    }
    
    return console.log(maior);
}

maiorDeTres(10, 50, 30);