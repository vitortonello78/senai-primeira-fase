
// const dinossauro = {
//     nome: "rex",
//     altura: `6`
// }
const dinossauros = []

// dinossauros.push(dinossauro)

// document.getElementById(`Dino`).innerHTML = `Nome: ${dinossauros[0].nome}; Altura: ${dinossauros[0].altura}`


function cadastrarDino() {
    let nomeLido = document.getElementById("inputNome").value
    let alturaLida = Number(document.getElementById("inputAltura").value)

    const dino = {
        nome: nomeLido,
        altura: alturaLida,
    }
    dinossauros.push(dino)

    console.log(dinossauros);
    document.getElementById("inputNome").value = ""
    document.getElementById("inputAltura").value = ""
    document.getElementById("inputNome").focus()
}