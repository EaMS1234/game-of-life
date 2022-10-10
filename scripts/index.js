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

// "Play/pause" button handler
function playPause() {
    playing = !playing

    if (playing) {
        playPauseButton.innerText = 'Pause'
    } else {
        playPauseButton.innerText = 'Play'
    }
}

// "Generate" button handler
function newGame(random = true) {
    // Re-generates a game
    game = generateWorld((height / 20), (width / 20), random)

    console.log(game)
}

// Configures the page
window.onload = function () {
    // Generates a new game
    newGame()

    // Configures the canvas
    const canvas = document.getElementById('game_board')
    canvas.setAttribute('width', `${width}`)
    canvas.setAttribute('height', `${height}`)

    const ctx = canvas.getContext('2d')

    for (let i = 0; i < game.length; i++) {
        let rectX = game[i].positionX * 20
        let rectY = game[i].positionY * 20

        ctx.strokeRect(rectX, rectY, 20, 20)

        if (game[i].alive) {
            ctx.fillRect(rectX, rectY, 20, 20)
        }
    }
}
