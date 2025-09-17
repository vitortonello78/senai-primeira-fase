
let placa = Number(prompt("digite a placa do veiculo: "))
let numeroB = Number(prompt("digite o segundo numero: "))
if (placa > numeroB){
alert(`o numero ${placa} é maior que ${numeroB}`)
} else if (placa < numeroB) {
    alert(`o numero ${numeroB} é maior que ${placa}`)
} else {
    alert("os numeros são iguais")
}
