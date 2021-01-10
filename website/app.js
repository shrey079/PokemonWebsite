// This file connects with the index.html file

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// const Winner = document.querySelector("#winner"); 
// Winner.classList.add("hide")

const container = document.querySelector("#container");
console.dir(container);

for(let i = 0; i < 898; i++){ 
    let pok = document.createElement("input");
    pok.type = "image";
    pok.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`;
    if( i === 0 ){ 
        pok.id = "winner"
        pok.setAttribute("onclick", "winner()")
    } else { 
        pok.id = "loser";
    }
    container.appendChild(pok);
}

function winner(){ 
    console.log("You have won the game!!")
    const cont = document.querySelector("#container");
    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    cont.classList.add("hide")
    h1.classList.add("hide")
    p.classList.add("hide")

    const new_h1 = document.createElement("h1")
    const new_p = document.createElement("p")
    const new_div = document.createElement("div")

    const canvas = document.createElement("canvas")
    canvas.id = "myCanvas";
    canvas.width = "1500";
    canvas.height = "600";
    canvas.classList.add("center2")

    new_h1.innerText = "Wohoo! Congratulations"
    new_p.innerText = "You have found my favourite Pokemon."
     

    new_div.appendChild(new_h1);
    new_div.appendChild(new_p);
    new_div.appendChild(canvas);

    new_div.classList.add('center')
    document.body.appendChild(new_div);
    
    fireworks();
}


function fireworks() { 
    const max_fireworks = 9,
    max_sparks = 40;
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');
    let fireworks = [];
    
    for (let i = 0; i < max_fireworks; i++) {
    let firework = {
        sparks: []
    };
    for (let n = 0; n < max_sparks; n++) {
        let spark = {
        vx: Math.random() * 5 + .5,
        vy: Math.random() * 5 + .5,
        weight: Math.random() * .3 + .03,
        red: Math.floor(Math.random() * 2),
        green: Math.floor(Math.random() * 2),
        blue: Math.floor(Math.random() * 2)
        };
        if (Math.random() > .5) spark.vx = -spark.vx;
        if (Math.random() > .5) spark.vy = -spark.vy;
        firework.sparks.push(spark);
    }
    fireworks.push(firework);
    resetFirework(firework);
    }
    window.requestAnimationFrame(explode);
    
    function resetFirework(firework) {
    firework.x = Math.floor(Math.random() * canvas.width);
    firework.y = canvas.height;
    firework.age = 0;
    firework.phase = 'fly';
    }
    
    function explode() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework,index) => {
        if (firework.phase == 'explode') {
            firework.sparks.forEach((spark) => {
            for (let i = 0; i < 10; i++) {
            let trailAge = firework.age + i;
            let x = firework.x + spark.vx * trailAge;
            let y = firework.y + spark.vy * trailAge + spark.weight * trailAge * spark.weight * trailAge;
            let fade = i * 20 - firework.age * 2;
            let r = Math.floor(spark.red * fade);
            let g = Math.floor(spark.green * fade);
            let b = Math.floor(spark.blue * fade);
            context.beginPath();
            context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
            context.rect(x, y, 4, 4);
            context.fill();
            }
        });
        firework.age++;
        if (firework.age > 100 && Math.random() < .05) {
            resetFirework(firework);
        }
        } else {
        firework.y = firework.y - 10;
        for (let spark = 0; spark < 15; spark++) {
            context.beginPath();
            context.fillStyle = 'rgba(' + index * 50 + ',' + spark * 17 + ',0,1)';
            context.rect(firework.x + Math.random() * spark - spark / 2, firework.y + spark * 4, 4, 4);
            context.fill();
        }
        if (Math.random() < .001 || firework.y < 200) firework.phase = 'explode';
        }
    });
    window.requestAnimationFrame(explode);
    }
}