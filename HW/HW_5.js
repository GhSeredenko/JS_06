// Напишите функцию с калькулятором (используйте предыдущий код),
//  в которую, в качестве параметров, передаются три переменные, 
//  две - числовые и третья отвечает за знак арифметической 
//  операции (*, /, -, +). Проверьте работу функции.
// example:  function calculate(a, b, operator){}


// function calculator(a, b, operator) {
//     if (isNumber(a) && isNumber(b)) {
//         if (operator === "+") {
//             return (a + b);
//         }
//         else if (operator === "-") {
//             return (a - b);
//         }
//         else if (operator === "/") {
//             if (b != 0) {
//                 return (a / b);
//             }
//             else {
//                 return ("cannot devide by 0");
//             }
//         }
//         else if (operator === "*") {
//             return (a * b);
//         }
//         else {
//             return ("Please check values");
//         }
//     }
//     else {
//         return ("Please,  enter a number")
//     }
//     console.log(calculator(5, 5, '*'));

//     function isNumber(a) {
//         return (typeof (a) === "number")
//     }
// }

// 3. Напишите функцию, которая создает и выводит 
// в консоль кастомное приветствие с именем, 
// которое вы передаете в функцию.

// function greeting(name) {
//     console.log(`Hello ${name}`);
// }

// let name = "Vasya"
// greeting('Ola')
// greeting (name)

// function print(argument) {
//     console.log(argument);
// }
//print ("Hello js")

// function sum(num1, num2){
//     return num1 + num2;
// }
// print(sum(3, 6))

// function findMinNumber (num1, num2){

//     if( num1 > num2){
//         return num2
//     } else if(num1 < num2){
//         return num1
//     }else {
//         return " = "
//     }
// }
// let a = 6;
// let b = 10;

// console.log(findMinNumber(a,b))
// console.log(findMinNumber(3,8))
// console.log(findMinNumber(15,6))

// let num1 = 10
// let num2 = 5
// if( num1 > num2){
//     console.log(num2); 
// } else if(num1 < num2){
//     console.log(num1); 
// }else {
//     console.log(" = ")
// }

// const arrowFunction = (e, f) => {

// }

// console.log(arrowFunction(2, 5));

// arr = arr.filter(i => i % 2 == 0) //возвращает новый массив


// Напишите функцию, которая принимает аргументы 
// let bmi = (heigth, weight) => +(weight / (heigth)**2).toFixed(fractionDigits:2)
// console.log(bmi(1.7, 70));

//C = (F – 32) x 5/9
// const celsius = (farenhait) => ((farenhait - 32) * 5/9).toFixed(2)  
// console.log(celsius(100));