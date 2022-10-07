// Code that control's the game's page

// Variables
var playing = false

// HTML's elements
const playPauseButton = document.getElementById('play_pause_button')
const generateButton = document.getElementById('generate_new_game')
const generationsPersec = document.getElementById('generations_per_sec')

// Play-pause button pressed
function playPause() {
    playing = !playing

    if (playing) {
        playPauseButton.innerText = 'Pause'
    } else {
        playPauseButton.innerText = 'Play'
    }
}

function main() {
    // Configures the canvas
    let width = Math.floor(window.innerWidth / 5) * 5 - 100
    let height = Math.floor(window.innerHeight / 5) * 5 - 200

    const canvas = document.getElementById('game_board')
    canvas.setAttribute('width', `${width}`)
    canvas.setAttribute('height', `${height}`)

    const ctx = canvas.getContext('2d')
}

main()
