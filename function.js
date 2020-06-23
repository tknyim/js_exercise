// Arrow Function (Node uses this almost exclusively)
// Arrow Function #1
const myArrowFunc = (param1,param2) => {
    console.log(param1,param2)
}
myArrowFunc(2,3)
// "2,3"

// explicit returns "return"
// Arrow Function #2
const myArrowFunc2 = {param1,param2} => {
    console.log(param1,param2)
    return param1 + param2
}
myArrowFunc2("This","That") //concanates a string
// "ThisThat"

// implicit return (returns whatever is there)
// Arrow Function #3
myArrowFunc3 = {param1, param2} => param1 + param2
myArrowFunc3(2,'toto')
// "2toto"

// Arrow Function #4
const myArrowFunc4 = {param1,param2} => ()=>"do nothing"
myArrowFunc4()
// "(param1,param2) => ()=>"do nothing"
let newFunc = myArrowFunc4()
newFunc()
// "do nothing"

// _____________________________________________
let myFunc = () =>{
    console.log('This is the first part')
    return () => {  //anonymous function "()"
        console.log('This is another item')
    }
}
myFunc()
// "This is the first part"
// () => {
//      console.log('This is another item')
//  }
let anotherVar = myFunc()
anotherVar()
// "This is another item"
myFunc()()
// "This is the first part"
// "This is another item"
// ** Runs both parts **

// Another way of doing functions
let crazyLooking = oneParam => {
    console.log(oneParam)
}
crazyLooking("This is odd")
// "This is odd"

// This is a total valid way of writing a function
// Assigning a variable/ to an ArrowFunction/ that has an implicit return on the only item 
let another = nada => nada
another("something")
// "something"

let myFunc = function(aFunc){
    console.log("I am a func")
    return aFunc
}
let another = () => console.log("test")

myFunc(another)()
// "I am a func"
// "test"

myFunc(function(){
    console.log('THIS WORKS')
})
// I am a func
// f (){
// console.log('THIS WORKS')
// }
let newfunc = myFunc(function(){
    console.log('THIS WORKS')
})
// I am a func
newfunc()
// "THIS WORKS"

// An example
const addToTWo = num => num + 2
addToTWo(34)
// "36"
addToTWo("kittens")
// "kittens2"

// _____________________________________________
console.log('Hi','my name is','Eric')
// "Hi my name is Eric"

let greeting = "Hi My name is"
console.log(greeting + " Eric")
// "Hi my name is Eric"

let myVar = "cat"
let tempLit = `${myVar} is an animal`
tempLit
// "cat is an animal"

tempLit = `${function(cat){return cat}("Jojo")} is an animal`
// "Jojo is an animal"

// Ternary
let newName = "Joe"
let newLit = `${newName == "Joe" ? "Hey Joe" : "Not Joe?"} is great`
newLit
// "Hey Joe is great"
let newName = "Bob"
let newLit = `${newName == "Joe" ? "Hey Joe" : "Not Joe?"} is great`
newLit
// "Not Joe? is great"
// _____________________________________________
let g= "Good"
let j = "Job"
let myString = `${g} ${j} y'all`
// "Good Job y'all"