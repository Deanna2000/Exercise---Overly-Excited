// Set up arrays
let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");

// Execute a for loop that will iterate over the arrays
for (i = 0; i < bands.length; i++) {


// Get a reference to the current item in the bands array
const currentBand = bands[i];
  

// Update the innerHTML value of the DOM element for bands
bandElement.innerHTML += `<h2>${currentBand}</h2>`;
   

// Get a reference to the current item in the vegetables array
const currentVeggie = vegetables[i];

// Update the innerHTML value of the DOM element for vegetables
veggieElement.innerHTML += `<h2>${currentVeggie}</h2>`;
}