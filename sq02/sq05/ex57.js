// 5.7
let dias
let valorDiaria
let totalBruto, totalLiquido
let desconto10, desconto15, Multa=150

dias = Number(prompt("quantos dias:"))
if(dias <= 5){
    valorDiaria = 100
}else if(dias <=10){
    valorDiaria = 90
}else{
    valorDiaria = 80
}

totalBruto = dias * valorDiaria
console.log(totalBruto);

desconto10 = totalBruto * 10/100
desconto15 = totalBruto * 15/100

totalLiquido = totalBruto - (desconto10 + desconto15) + Multa


// dias
// valor diaria
// total bruto
// desconto10
// desconto15
// multa
// total liquido
alert("Numero de dias: " + dias + "\nValor por diaria:  R$" + valorDiaria + "\nTotal bruto: R$" + totalBruto + "\nDesconto de 10%: R$" + desconto10 + "\nDesconto de 15%: R$" + desconto15 + "\nMulta: R$" + Multa + "\n==============" + "\nTotal a pagar: R$" + totalLiquido);


// descontei os descontos
// multei a multa