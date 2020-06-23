// 1. Write a function that accepts string as an argument and if the string is less than 4 characters return one message, 
//    if it is greater than 12 return another message otherwise return a final message about being accepted.

// *** const testFunc = myString => myString.length < 4 ? "Too Short" : myString.length > 12 ? "Too Long" : "Just Right"
// testFunc(" ")

const myString = myString =>{
    if (myString.length < 4) {
        console.log("Too Short")
    } else if (myString.length > 12) {
        console.log("Too Long")
    } else {
        console.log("Just Right")
    }
}
myString(" ")

// 2. Write a function that accepts an argument named temperature. Have at least 6 ranges of temperature that represents a html valid color. 
//    Return the color based on the argument supplied when calling the function.
//      1. Use Switch. (hint do a google search for 'switch(true)' )

let Temperature = Temperature =>{
    switch(Temperature) {
        case "red":
            console.log("hot");
            break;
        case "orange":
            console.log("humid");
            break;
        case "yellow":
            console.log("warm");
            break;
        case "green":
            console.log("breezy");
            break;
        case "blue":
            console.log("cold");
            break;
        case "purple":
            console.log("freezing");
            break;
        default:
            console.log("The temperature is fine");
    }
} 
Temperature("red")

// 3. Write a function that will return an array of arrays with 100 copies of each element in the array supplied in the as an argument of the function. 
//      1. The array in the parameter needs to be strings and needs to have at least 5 elements.

function myArray(param1,param2,param3,param4,param5) {
    let myFruits = [param1,param2,param3,param4,param5]
    for(let i = 1; i < 101; i++){
        console.log(myFruits)
    }
}
myArray("Apples","Bananas","Grapes","Pears","Melons")