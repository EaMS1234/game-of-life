// Definition of a cell
const cell = {
    positionX: 0,
    positionY: 0,
    alive: false
}

// Generates a world full of cells
function generateWorld(height = 5, width = 5, random = false) {
    let world = []

    for (let y = 0; y < width; y++) {
        for (let x = 0; x < height; x++) {
            // Copies the cell object
            let newCell = Object.assign({}, cell)
            newCell.positionX = x
            newCell.positionY = y

            // Randomizes the state of the cell if enabled
            // when calling the function
            if (random) {
                let rand = Math.floor(Math.random * 2)

                switch (rand) {
                    case 0:
                        newCell.alive = false
                        break;

                    case 1:
                        newCell.alive = true
                        break;
                }
            }

            world.push(newCell)
        }
    }

    return world
}
