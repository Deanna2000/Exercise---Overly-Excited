// Create an array that contains the words in the sentence
let sentence = ["Athena","the","burninator","is","the","most","fierce","dog","I","know","and","she","is","so","cool"];

/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {
    let arrayBuilder = "";
    let exclaimPt = "!"
    for (theWordArray = 0; theWordArray < sentence.length; theWordArray++) {
        let currentItem = sentence[theWordArray];

        if (theWordArray === 0){
            arrayBuilder = currentItem;
        }
        else {
            arrayBuilder += " " + currentItem;
        }
      
        if ((theWordArray +1) % 3 === 0) {
            arrayBuilder += exclaimPt;
            exclaimPt += "!";
        }        
        if (theWordArray === (sentence.length - 1)){
            arrayBuilder += ".";
        }
        
        console.log(arrayBuilder);
        
      }
}
// Invoke the function and pass in the array
addExcitement(sentence);