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
                switch (Math.floor(Math.random() * 2)) {
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

function updateWorld(world = []) {
    // The next generation of the current state
    let newWorld = []

    let topX = 0
    let topY = 0

    // Needed to get the maximum Y and X indexes
    world.forEach(item => {
        if (item.positionX > topX) {
            topX = item.positionX
        }

        if (item.positionY > topY) {
            topY = item.positionY
        }
    });

    for (let i = 0; i < world.length; i++) {
        // Total of alive neighbors for the current world[i] cell
        let aliveNeighbors = 0

        // Left neighbor
        if (world[i].positionX > 0) {
            if (world[i - 1].alive) {
                aliveNeighbors += 1
            }
        }

        // Right neighbor
        if (world[i].positionX < topX) {
            if (world[i + 1].alive) {
                aliveNeighbors += 1
            }
        }

        // Bottom neighbor
        if (world[i].positionY > 0) {
            if (world[i - topX - 1].alive) {
                aliveNeighbors += 1
            }
        }

        // Top neighbor
        if (world[i].positionY < topY) {
            if (world[i + topX + 1].alive) {
                aliveNeighbors += 1
            }
        }

        // Top left neighbor
        if (world[i].positionY < topY && world[i].positionX > 0) {
            if (world[i + topX].alive) {
                aliveNeighbors += 1
            }
        }

        // Top right neighbor
        if (world[i].positionY < topY && world[i].positionX < topX) {
            if (world[i + topX + 2].alive) {
                aliveNeighbors += 1
            }
        }

        // Bottom left neighbor
        if (world[i].positionY > 0 && world[i].positionX > 0) {
            if (world[i - topX - 2].alive) {
                aliveNeighbors += 1
            }
        }

        // Bottom right neighbor
        if (world[i].positionY > 0 && world[i].positionX < topX) {
            if (world[i - topX].alive) {
                aliveNeighbors += 1
            }
        }
    
        // Now that we have the number of neighbors for a given cell,
        // we need to decide what happens with it

        // Game's rules

        // Creates a copy of the cell ...
        let copyCell = Object.assign({}, world[i])

        if (world[i].alive && aliveNeighbors != 2 && aliveNeighbors != 3) {
            // ... it dies if there are not 2 or 3 neighbors ...
            copyCell.alive = false
        } else if (world[i].alive == false && aliveNeighbors == 3) {
            // ... pops to life if there are 3 neighbors ...
            copyCell.alive = true
        }

        // ... then, we push the copied cell to the new world
        newWorld.push(copyCell)
    }

    return newWorld
}
