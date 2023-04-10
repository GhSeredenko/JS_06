//let str = 'Hello'
// const printName() {
// return "JavaScript"
// }
// let result = printName();
// console.log(result);

//function nameOfTheFunction() {


// let str = "Hello"
// function printName() {
//     str = "Hey"
//     let num1 = 10;
//     let num2 = 20;
    

// return name() + "Java" + ' ' + str;
// return num1 + num2;

// function name(){
//     return "Hi";
// }
// }

// console.log(printName);
// console.log(srt);
//console.log(nameIt);

// const printName = function(name) {
// return `Hello ${name}`
// }
// console.log(printName('Sveta')) 
// function addition(num1, num2) {
//     return num1 + num2;
// }
// function substraction(num1, num2){
//     return num1 - num2;
// }
// function product(num1, num2) {
//     return num1 * num2
// }
// function result(num1, num2, callback) {
//     return callback(num1, num2);
// }
// console.log(result(10,20, addition));

// const addition = (num1, num2) => {
//     return num1 + num2;
// }
// const substraction = (num1, num2) =>{
//     return num1 - num2;
// }
const product = (num1, num2) => num1 * num2; 

function result(num1, num2, product) {
    return product(num1, num2);
}
console.log(result(10,20, product));