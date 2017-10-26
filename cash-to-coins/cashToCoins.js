//Set the dollar amount we are calculating
let dollarAmount = 2.98
const piggyBank = {
    quarters: .25,
    dimes: .10,
    nickels: .05,
    pennies: .01,
}

let keyAmount = 0;

//Set up something to deplete dollarAmount and identify the number of coins (quarters, etc.)

keyAmount = {} //declare keyAmount

for (var key in piggyBank) {
    if (piggyBank.hasOwnProperty(key)) {
        let keyAmount = Math.floor(dollarAmount / piggyBank[key])
       
        if (keyAmount > 0) {
            console.log("Number of", (key), ": ", keyAmount)
            dollarAmount -= (keyAmount * (piggyBank[key]))//rounding issue here
            console.log("Remaining", dollarAmount)
        }
        else {
            console.log("Number of", (key), ": ", 0)
        }
    }
}


