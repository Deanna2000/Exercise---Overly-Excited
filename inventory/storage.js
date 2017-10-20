
  const indonesianArmoire = {
    "name": "Armoire from Indonesia",
    "type": "furniture",
    "location": "Bedroom",
    "description": "We bought this armoire from a family in Gallatin 10 years ago and it fits our style so perfectly."
  }
  
  const paintingAbstract = {
    "name": "Abstract painting by Dennis Lahikainen",
    "type": "art",
    "location": "Living Room",
    "description": "This painting was given to me by chidhood neighbor upon my high school graduation. He was a wonderful local artist/architect and this was his first experiment with abstract art."
  }

  const zebraTable = {
    "name": "Dining Table with Zebra Design",
    "type": "furniture",
    "location": "Kitchen",
    "description": "I designed the zebra scheme for the table and Steve and I painted it together when we first started dating."
  }

  const babyArmoire = {
    "name": "Armoire from baby crib",
    "type": "furniture",
    "location": "Living Room",
    "description": "This small cabinet is one end of a baby crib and it used to serve as a place to store baby clothes and other items."
  }

  const vintagePlates = {
      "name": "Dinner Plates from early 1900's",
      "type": "cuisine",
      "location": "Kitchen",
      "description": "These plates belonged to my maternal grandmother whom I never met (she died before I was born). I think about her every time I used them."
  }
  
  const cookieOven = {
    "name": "Otis Spunkmeyer cookie oven",
    "type": "cuisine",
    "location": "Kitchen",
    "description": "This cookie oven was a part of the Nissan food service operation and my brother brought them home when they stopped selling these cookies. Nissan is a big part of our family history and it's what brought us to Tennessee from Michigan."
}

  const espressoMaker = {
  "name": "Delonghi espresso maker",
  "type": "cuisine",
  "location": "Kitchen",
  "description": "My brother bought this espresso maker 10 years and it has passed through my mother's house and then my daughter's house and now it's mine. I will not be passing it on until it's dead."
}

  const deannaPortrait = {
  "name": "Portrait of me",
  "type": "art",
  "location": "Kitchen",
  "description": "My friend Nadia painted a beautiful watercolor portrait based on one of my favorite pictures of myself."
}

  const poeWreath = {
  "name": "Edgar Allen Poe wreath",
  "type": "art",
  "location": "Kitchen",
  "description": "My friend Charity designed and made this wreath for me, using the pages of a Poe book and some other decorations including a skull, coffin, beatle, raven feathers, etc."
}

  const visionBoard = {
  "name": "My guitar shaped vision board",
  "type": "art",
  "location": "Kitchen",
  "description": "I made a vision board to set my goals for 2017 and I made it in the shape of a guitar. I used magazine pictures to capture the intent of my goals and decided to put them in the shape of a guitar which is an overall goal."
}

let art = []
let furniture = []
let cuisine = []

art.push(paintingAbstract, deannaPortrait, visionBoard,poeWreath)
furniture.push(babyArmoire,indonesianArmoire, zebraTable)
cuisine.push(vintagePlates,cookieOven,espressoMaker)

let HomeInventory = {
  "furniture": furniture,
  "art": art,
  "cuisine": cuisine
}

const homeInventoryString = JSON.stringify(HomeInventory)
localStorage.setItem("homeInventory", homeInventoryString)