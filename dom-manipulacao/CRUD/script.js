
 const dinossauro = {
 nome: `Rex`,
 altura: `6`
}

const dinossauros = []

// dinossauros.push(dinossauro)
// document.getElementById("Dino").innerHTML = `nome: ${dinossauros[0].nome} - altura: ${dinossauros[0].altura}`

function cadastrarDinossauro() {
    let NomeLido = document.getElementById("nome").value
    let AlturaLida = document.getElementById("altura").value

    const dino = {
        nome: NomeLido,
        altura: AlturaLida
    }
    dinossauros.push(dino)
    console.log(dinossauros)
    document.getElementById("nome").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("nome").focus()
}

function mostrarTodososDinos(){

    for(let i=0; i<dinossauros.length ; i++){
        console.log(i)
document.getElementById('painelDino').innerHTML +=`  Nome: ${dinossauros[0].nome} altura: ${dinossauros[0].altura}`
    }}

    