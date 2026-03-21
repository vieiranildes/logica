let valorFrete;
let valorPedido = 50.00;
let bairro = "Centro";

if (valorPedido >= 80.00) {
    console.log("Frete grátis! Pedido: R$" + valorPedido);
} else {
    // Usamos === para comparação
    if (bairro === "Centro") {
        valorFrete = 5;
    } else if (bairro === "Brotas") {
        valorFrete = 8;
    } else if (bairro === "Itapuã") {
        valorFrete = 12;
    } else {
        valorFrete = 15;
    }

    let total = valorFrete + valorPedido;
    console.log("Frete: R$" + valorFrete + " | Pedido: R$" + valorPedido + " | Total: R$" + total);
}