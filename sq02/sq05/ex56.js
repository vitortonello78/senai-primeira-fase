let pontuação = Number(prompt("digite a pontuação do jogador: "))

if(pontuação <= 10){
    alert("deu ruim!")
}

if(pontuação>10 && pontuação<=100){
    alert("Amanhã é um novo dia!")
}
if(pontuação>100 && pontuação<=200){
    alert("supimpa!")
}else{
    alert("Mitou")
}


let dsconto10 =  totalbruto * 10/100
let desconto20 = totalbruto * 15/100