// If, Else If, Else_______________
let name = "Eric"
if (name == "Eric"){
    console.log("This is Eric")
}
//________________________
if (name == "Eric"){
    console.log("This is Eric")
} else {
    console.log('This is not Eric')
}
//________________________
if (name != "Eric"){ //***
    console.log("This is Eric")
} else {
    console.log('This is not Eric')
}
// _________________________________
name = "Erik" //***
if (name == "Eric"){
    console.log("This is Eric")
} else if (name == "Erik") {
    console.log('This is not Eric')
}
//________________________
if (name == "Eric"){
    console.log("This is Eric")
} else if (name == "Erik") {
    console.log('This is not Eric')
} else {
    console.log('Who are you')
}
// Ternary Condition_______________
let name = "Eric"
name == "Eric" ? console.log('Student') : console.log('not a student')
// Kind of like an implicit return
let result = name == "Eric" ? "Student":"Not a student"
result

// React example
let isOn = false
let buttonText = isOn ? "Turn Off":"Turn On"
buttonText
// "Turn On"

let isOn = true
let buttonText = isOn ? "Turn Off":"Turn On"
buttonText
// "Turn Off"
// Conditional______________________
const testFunc = myString => myString.length < 4 ? "Too Short" : myString.length > 12 ? "Too Long" : "Just Right"

// _________________________________
let name = "Eric";
let quote;
console.log(quote);
// ** If there are no breaks, it would go through each line then print 'default'
switch(name){
    case "Eric":
        quote = 'Something';
        break;
    case "Jim":
        quote = "Something something";
        break;
    case "James":
        quote = "Some"
    default:
        quote = "No quote."
}
console.log(quote)

// While loops______________________
let i = 0;
while(i < 10){
    if(!(i % 2)){
        console.log('I am one with the force.')
    } else {
        console.log('The Force is with me. ')
    }
    i++;
}
// For loops________________________
// Increment
for(let i = 0; i < 10; i++){
    console.log(`Clone #514${i} : Clone #514${i} checking in for duty!`)
}
// Decrement
for(let i = 10; i >= 0; i--){
    console.log('Clone #5157: Confirmed kill!' + `${i} droids remaining!`)
}