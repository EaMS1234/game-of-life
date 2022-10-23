// Code that handles the game's page

// Variables
var playing = false
var width = Math.floor(window.innerWidth / 20) * 20 - 100
var height = Math.floor(window.innerHeight / 20) * 20 - 200
var game = {}
var speed = 10

// HTML's elements
const playPauseButton = document.getElementById('play_pause_button')
const generateButton = document.getElementById('generate_new_game')
const generationsPersec = document.getElementById('generations_per_sec')
const generationsPersecLabel = document.getElementById('gen_per_sec_label')

const canvas = document.getElementById('game_board')
const ctx = canvas.getContext('2d')

// "Play/pause" button handler
function playPause() {
    playing = !playing

    if (playing) {
        playPauseButton.innerText = 'Pause'
    } else {
        playPauseButton.innerText = 'Play'
    }

    gameLoop()
}

function updateCanvas() {
    // Clears the canvas
    ctx.clearRect(0, 0, width, height)

    game.forEach(cell => {
        let rectX = cell.positionY * 20
        let rectY = cell.positionX * 20

        ctx.strokeRect(rectX, rectY, 20, 20)

        if (cell.alive) {
            ctx.fillRect(rectX, rectY, 20, 20)
        }
    });
}

// "Generate" button handler
function newGame(random = true) {
    // Re-generates a game
    game = generateWorld((height / 20), (width / 20), random)

    updateCanvas()
    console.log(game)
}

// "Click over canvas" handler
canvas.onclick = function (evt) {
    // Get the origin of the canvas element
    let origin = canvas.getBoundingClientRect()

    // Gets the position of the mouse relative to the canvas origin. X and Y
    // need to be swapped to work correctly with the "game.js"'s functions.
    let cellY = Math.floor((evt.clientX - origin.left) / 20)
    let cellX = Math.floor((evt.clientY - origin.top) / 20)

    // Get cell with that specific position
    let targetCell = game.find(
        target => target.positionX == cellX && target.positionY == cellY
    )

    targetCell.alive = !targetCell.alive

    updateCanvas()
}

// "Generation per second" handler
function updateSpeed() {
    speed = generationsPersec.value / 10

    generationsPersecLabel.innerText = `${speed} Generations per second`
}

// Runs the game itself
async function gameLoop() {
    while (playing) {
        // Updates the game and board
        game = updateWorld(game)
        updateCanvas()

        // Allows the user to decide the simulation speed
        await new Promise(r => setTimeout(r, 1000 / speed))
    }
}

// Configures the page
window.onload = function () {
    // Configures the canvas
    canvas.setAttribute('width', `${width}`)
    canvas.setAttribute('height', `${height}`)

    // Generates a new game
    newGame()

    // Sets the speed
    updateSpeed()
}
