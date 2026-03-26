let valorDaCompra = 950.00;
let desconto = 0;

if(valorDaCompra < 100.00){
    desconto = 0;
    }
else if (valorDaCompra >= 100.00 && valorDaCompra <= 299.99){
    desconto = valorDaCompra * 0.05
console.log(valorDaCompra);

} else if(valorDaCompra >= 300.00 && valorDaCompra <= 499.99){
    desconto = valorDaCompra * 0.10;
} else {
    desconto = valorDaCompra * 0.15;
    }

    let valorFinal = valorDaCompra - desconto;
    
    console.log('Desconto: ', desconto);
    console.log('Valor Final: ', valorFinal);