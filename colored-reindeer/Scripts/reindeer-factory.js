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


//set up function to create reindeer objects
const createReindeerObj = function (name) {
    return Object.create(null, {
        "name": {
            value: name, 
            enumerable: true
        },
        "color": {
            value: getColor.next().value,//call the next item in the color generator
            enumerable: true
        }
    })
}

//use factory function to grab reindeer name and call colors from generator
const reindeerFactory = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const coloredReindeer = []
    for (i = 0; i < reindeer.length; i++) {
        //use createReindeerObj to add this information to the coloredReindeer array
        coloredReindeer.push(createReindeerObj(reindeer[i])) // Put new reindeer object in coloredReindeer array
    }
    console.log(coloredReindeer)
    return coloredReindeer // Return coloredReindeer array
}
