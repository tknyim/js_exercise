// 1. Write a function 3x that has two parameters and those parameters are used in a sentence that says "hello my name is NAME I am AGE years old", except NAME and AGE would be the parameters given.
//    1. Use the 3 ways of declaring a function to make each function different but the results to console the same.
//    2. For each function use a different way of creating the output sentence. For example only one can use concatanation.
// 
// _____________________________________________________________
// let myNameAge = function(name,age){
//     console.log("Hello my name is", name, "and I am", age, "years old")
// }
// myNameAge("Eric",27)
// let myName = (name,age) => "Hello my name is " + name + "and I am " + age + "years old."
// myName("Eric", 27)
// 
// function iAm(name,age){
//     return `Hello my name is ${name} and I am ${age} years old.`
// }
// iAm("Eric", 27)
// _____________________________________________________________

// 2. Write a function that has another function as a parameter, and inside the main function the parameter function is called after you print to the console "Main Function Executing".
//     1. You can declare the function as a varaible before and place that variable as the parameter.
//     2. (Challange) have the main function have a second parameter that will be used as an argument for the child function.
// 
// _____________________________________________________________
// let variable = (param1) => {
//     console.log("Main function is executing")
// }
// function mainFunct(callback){
//     console.log("Main Function Executing")
//     callback()
// }
// mainFunct(variable)
// ** mainFunct(() =>console.log('I am here'))
// __________________________________________________________
// // function mainFunct(callback, secondParam){
//     console.log("Main Function Executing")
//     callback(secondParam)
// }
// mainFunct(myParam => console.log("My Parent gave me " + myParam), "Something Bad")
// 
// mainFunct(variable, "dodo")
// _____________________________________________________________

// 3. Write a function that will print to the console "Parent Function Called" and then returns a function that when is called will print to the console "Child Function Called" The child function cannot be declared outside of the main function. Follow steps bellow if you need a step by step way to do it.
//     1. Create a function and have that function print to the console.
//     2. Inside the main function declare the second function as a variable that prints to the console the given statement
//     3. after the second function is declared inside the main function, return the variable that the second function is assigned to.
//     4. Outside of the function assign the called function to a variable (that variable is now a function).
//     5. call that variable.
// 
// _____________________________________________________________
// let parentFunc = function(){
//     console.log("Parent function")
//     return ()=>console.log("Child Function")
// }
// parentFunc()
// let parentF = parentFunc()
// parentF()
// __________________________________________________________
// let aFunc = () => () =>console.log('This is super strange) *** an example of how this goes beyond the scope but still valid ***
// 
// let myObj = {
//     aFunc: ()=>console.log('A function')
// }
// myObj.aFunc()
// 
// myObj.bFunc() = () => "Wow String returned"
// myObj.bFunc()
// myObj