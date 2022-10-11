// Code that handles the game's page

// Variables
var playing = false
var width = Math.floor(window.innerWidth / 20) * 20 - 100
var height = Math.floor(window.innerHeight / 20) * 20 - 200
var game = {}

// HTML's elements
const playPauseButton = document.getElementById('play_pause_button')
const generateButton = document.getElementById('generate_new_game')
const generationsPersec = document.getElementById('generations_per_sec')

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

// Configures the page
window.onload = function () {
    // Configures the canvas
    canvas.setAttribute('width', `${width}`)
    canvas.setAttribute('height', `${height}`)

    // Generates a new game
    newGame()
}
