// This file connects with the index.html file

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container")
console.dir(container)

for(let i = 0; i < 898; i++){ 
    let pok = document.createElement("img")
    pok.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
    pok.id = i.toString();
    container.appendChild(pok)
}

