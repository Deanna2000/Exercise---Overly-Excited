//locate the place you are listening for an event
const buttonEl = document.getElementById("order-pancakes")

//set up what you want to  happen upon this event
function handleButtonClick (event) {
    const inputContent = document.getElementById("keypress-input").value
    console.log(inputContent)
    console.log(event)
}

//implement listening

buttonEl.addEventListener("click", handleButtonClick)


//create new card in DOM that includes delete button
let card = 
`
<div class="card">
<p>${inputContent}</p>
</div>
`
