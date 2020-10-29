// let x1y6 = document.getElementById('x1y6')
// let x2y6 = document.getElementById('x2y6')
// let x3y6 = document.getElementById('x3y6')

// let x1y5 = document.getElementById('x1y5')
// let x2y5 = document.getElementById('x2y5')
// let x3y5 = document.getElementById('x3y5')

// let x1y4 = document.getElementById('x1y4')
// let x2y4 = document.getElementById('x2y4')
// let x3y4 = document.getElementById('x3y4')

// let x1y3 = document.getElementById('x1y3')
// let x2y3 = document.getElementById('x2y3')
// let x3y3 = document.getElementById('x3y3')

// let x1y2 = document.getElementById('x1y2')
// let x2y2 = document.getElementById('x2y2')
// let x3y2 = document.getElementById('x3y2')

// let x1y1 = document.getElementById('x1y1')
// let x2y1 = document.getElementById('x2y1')
// let x3y1 = document.getElementById('x3y1')


let success = [
    'x1y5', 'x2y5', 'x3y5',
    'x1y4', 'x2y4', 'x3y4',
    'x1y3', 'x2y3', 'x3y3',
    'x1y2', 'x2y2', 'x3y2',
    'x1y1', 'x2y1', 'x3y1',
    'x1y6'
]
let random = [...success]

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
shuffle(random)
console.log(random)
random[random.indexOf(`x1y6`)] = random[15]
random[15] = `x1y6`
random[random.indexOf(`x1y5`)] = random[0]
random[0] = `x1y5`
console.log(random)

let move = document.getElementById('x1y6')
move.classList.add('x1y6')

document.getElementById('x1y5').classList.add(`${random[0]}`)

document.getElementById('x2y5').classList.add(`${random[1]}`)
document.getElementById('x3y5').classList.add(`${random[2]}`)

document.getElementById('x1y4').classList.add(`${random[3]}`)
document.getElementById('x2y4').classList.add(`${random[4]}`)
document.getElementById('x3y4').classList.add(`${random[5]}`)

document.getElementById('x1y3').classList.add(`${random[6]}`)
document.getElementById('x2y3').classList.add(`${random[7]}`)
document.getElementById('x3y3').classList.add(`${random[8]}`)

document.getElementById('x1y2').classList.add(`${random[9]}`)
document.getElementById('x2y2').classList.add(`${random[10]}`)
document.getElementById('x3y2').classList.add(`${random[11]}`)

document.getElementById('x1y1').classList.add(`${random[12]}`)
document.getElementById('x2y1').classList.add(`${random[13]}`)
document.getElementById('x3y1').classList.add(`${random[14]}`)
let x = 1;
let y = 6;
document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            if (x > 1 ) {
                x = x - 1
                move.className = ''
                move.classList.add(`${document.getElementById(`x${x}y${y}`).className}`);
                move = document.getElementById(`x${x}y${y}`)
                move.className = ''
                move.classList.add(`x1y6`)
                console.log(random.indexOf(`x1y6`))
                z = random.indexOf(document.getElementById(`x${x + 1}y${y}`).className)
                random[random.indexOf(`x1y6`)] = random[random.indexOf(document.getElementById(`x${x + 1}y${y}`).className)]
                random[z] = `x1y6`
                console.log(random)
                if (JSON.stringify(random) == JSON.stringify(success)) {
                    alert("You Win, nhấn f5 để chơi lại")
                }
            }
            break;
        case 38:
            if (y < 6 && !(y==5 && (x==2||x==3)) ) {
                y = y + 1
                move.className = ''
                move.classList.add(`${document.getElementById(`x${x}y${y}`).className}`);
                move = document.getElementById(`x${x}y${y}`)
                move.className = ''
                move.classList.add(`x1y6`)
                console.log(random.indexOf(`x1y6`))
                z = random.indexOf(document.getElementById(`x${x}y${y - 1}`).className)
                random[random.indexOf(`x1y6`)] = random[random.indexOf(document.getElementById(`x${x}y${y - 1}`).className)]
                random[z] = `x1y6`
                console.log(random)
                if (JSON.stringify(random) == JSON.stringify(success)) {
                    alert("You Win, nhấn f5 để chơi lại")
                }
            }
            break;
        case 39:
            if (x < 3 && y!=6) {
                x = x + 1
                move.className = ''
                move.classList.add(`${document.getElementById(`x${x}y${y}`).className}`);
                move = document.getElementById(`x${x}y${y}`)
                move.className = ''
                move.classList.add(`x1y6`)
                console.log(random.indexOf(`x1y6`))
                z = random.indexOf(document.getElementById(`x${x - 1}y${y}`).className)
                random[random.indexOf(`x1y6`)] = random[random.indexOf(document.getElementById(`x${x - 1}y${y}`).className)]
                random[z] = `x1y6`
                console.log(random)
                if (JSON.stringify(random) == JSON.stringify(success)) {
                    alert("You Win, nhấn f5 để chơi lại")
                }
            }
            break;
        case 40:
            if (y > 1) {
                y = y - 1
                move.className = ''
                move.classList.add(`${document.getElementById(`x${x}y${y}`).className}`);
                move = document.getElementById(`x${x}y${y}`)
                move.className = ''
                move.classList.add(`x1y6`)
                z = random.indexOf(document.getElementById(`x${x}y${y + 1}`).className)
                random[random.indexOf(`x1y6`)] = random[random.indexOf(document.getElementById(`x${x}y${y + 1}`).className)]
                random[z] = `x1y6`
                if (JSON.stringify(random) == JSON.stringify(success)) {
                    alert("You Win, nhấn f5 để chơi lại")
                }
                console.log(random)
            }
            break;
    }
});

