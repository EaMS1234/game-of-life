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
