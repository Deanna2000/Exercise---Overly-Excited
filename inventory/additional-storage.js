// Load the database from local storage.


// Parse the string into a JavaScript object.
const storedInventory = JSON.parse(localStorage.getItem("homeInventory"))


// Add one new object to each type array in your database (e.g. add a new piece of furniture).

const swirlPainting = {
    "name": "Blue and yellow swirl pattern abstract painting",
    "type": "art",
    "location": "Kitchen",
    "description": "I painted this several years ago with acrylic paints. The brush strokes give the appearance of a blurred or tie-dyed look."
} 

const VintageCouch = {
    "name": "Vintage post century modern couch",
    "type": "furniture",
    "location": "Living Room",
    "description": "Several years ago, we got a living room set including a couch, chair and footstool from a young couple living in east Nashville. The color is faded coral and it's an almost indesructible set that looks like it's from the 1940's."
  }
  
  const railStorage = {
    "name": "Ikea rail storage system for flatware and spices ",
    "type": "cuisine",
    "location": "Kitchen",
    "description": "I bought 3 metal rails and some hooks and hanging shelves so I could hang up all of my flatware and spices on the wall. It's a defining aspect of my kitchen."
  }
  
  //push the items into a category
  art.push(swirlPainting)
  furniture.push(VintageCouch)
  cuisine.push(railStorage)

//iterate over each object in the database
for (var key in HomeInventory){
 let inventoryIndex = HomeInventory[key];

    //   console.log("CIV",inventoryIndex);
    //   console.log("HIL", inventoryIndex.length);

//iterate over the properties for each object we just identified ^
for (let i = 0; i <inventoryIndex.length; i++) {
    // console.log("HIL2",inventoryIndex.length)

    //adding the current item to a variable
let currentItem = inventoryIndex[i];
    // console.log("ItemName", currentItem.name)

console.log(currentItem.type);

// If (currentItem.type === "furniture"); {
//       console.log("currentItem", currentItem)
      
//     }
// Else If (currentItem.type ==="art"); {
// console.log("currentItem", currentItem)
//       artLog += currentItem
//     }
// Else If (currentItem.type ==="cuisine"); {
// console.log("currentItem", currentItem)
//       cuisineLog += currentItem


//writing the list of objects with their names and descriptions to the browser    
let ItemWrite = document.getElementById("inventory").innerHTML += `<article><h2>${currentItem.type}</h2><h3>${currentItem.name}</h3><p>${currentItem.description}</p></article>`;
  
}}
