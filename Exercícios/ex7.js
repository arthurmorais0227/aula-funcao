function filtrarPares(numero) {
    let arrayCorreto = 0;
    let arrayIncorreto = 0;

    for(let i = 0; i < numero.length; i++) {
        if (numero[i] % 2 == 0){
            arrayCorreto.push(i);
    }

    console.log(arrayCorreto);
}
}

filtrarPares([0, 1, 2, 3, 4, 5, 6]);