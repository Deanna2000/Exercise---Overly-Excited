// Write a function to generate colors
const getNextColor = function* () {
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod",
        "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let counter = 0

    while (counter < colors.length) {
        yield currentColor = colors[counter]
        counter += 1
    }
}

//setting up iterator
const getColor = getNextColor();

//getting the next color from the generator
console.log("setup",getColor.next().value)

//set up function to create reindeer objects
const createReindeerObj = function (name, color) {
    return Object.create(null, {
        "name": {
            value: name, 
            enumerable: true
        },
        "color": {
            value: color,
            enumerable: true
        }
    })
}

//use factory function to grab reindeer name and call colors from generator
const reindeerFactory = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    for (i = 0; i < reindeeer.length; i++) {
        console.log(reindeer[i])
        console.log(getColor.next().value) //call the next item in the color generator
        //use createReindeerObj to add this information to the coloredReindeer array
        
    }
}
   
    // Put new reindeer object in coloredReindeer array
    const coloredReindeer = []


    // Return coloredReindeer array
