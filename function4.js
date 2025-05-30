function parOuImpar(numero) {
    if(numero % 2 == 0) {
        return 'Par';
    } else{
        return 'Impar';
    }
}

console.log(parOuImpar(6));
console.log(parOuImpar(9));
console.log(parOuImpar(12));
console.log(parOuImpar(131321));
console.log(parOuImpar(3));
