

    // Write a for function to generate colors
    const getNextColor = function* () {
        const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod",
        "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
        let counter = 0

        while (counter < colors.length) {
            yield currentColor = colors[counter]
            counter += 1

            console.log(currentColor)
        }
    }

    const colorBuilder = getNextColor()

    colorBuilder.next().value

    // const coloredReindeerBuilder = function () {
    //     const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]





    // Invoke factory function to create reindeer object

    // Put new reindeer object in coloredReindeer array


    // Return coloredReindeer array
