//call the function and create an object to store what's being returned from the function
const coloredReindeer = reindeerFactory()

//set up the option to write to screen using colored-reindeer as the ID 
let crInfo = document.getElementById("colored-reindeer")

//iterate through array to write reindeer info to screen
for (let i = 0; i < coloredReindeer.length; i++) {
    let currentCR = coloredReindeer[i]
   crInfo.innerHTML += 
    `
    <article>
        <h2 style="color:${currentCR.color}">Congratulations! You are now the proud owner of a ${currentCR.color} reindeer named: ${currentCR.name}</h2>
    </article>
    `
}   
