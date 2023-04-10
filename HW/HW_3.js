// Напишите программу калькулятора со switch, обработайте возможные ошибки ввода 
// Напишите программу калькулятора использую arrays & switch, обработайте возможные ошибки ввода 

// let a = 8
// let b = "4"
// let operation = "+"

// switch (operation) {
//     case "+":
//         console.log(a + b);
//         break;
//     case "-":
//         console.log(a - b);
//         break;
//     case "*":
//         console.log(a * b);
//         break;
//     case "/":
//         if(b == 0) {
//             console.log("Error. Can't devide by 0")
//         } else {
//         console.log(a /b);
//         }  
//         break;
//     default:
//         console.log("Error. Incorrect action");
// }

// let num1 = prompt('first num');

//     let oper = prompt('operation');
//     let num2 = prompt('second num');

//     let plus = +num1 + +num2;
//     let minus = +num1 - +num2;
//     let multiply = +num1 * +num2;
//     let divide = +num1 / +num2;
//     let operation = ['+', '-', '*', '/'];


//     if( (num1.trim() === "" || isNaN(num1)) || (num2.trim() === "" || isNaN(num2))){
//     console.log("Must be number");
//     } else {
//     switch (oper) {
//         case operation[0]:
//             console.log(plus);
//             break;
//         case operation[1]:
//             console.log(minus);
//             break;
//         case operation[2]:
//             console.log(multiply);
//             break;
//         case operation[3]:
//             if (num2 == 0) {
//                 console.log("Can't be divided by 0");
//                 break;
//             }
//                 console.log(divide);
//                 break;
//         default:
//             console.log("Wrong character");
//       }
//     }



// Попробуйте внедрить в свою программу с кофе вложенный if

// При помощи цикла for выведите чётные числа от 2 до 10


// for(let i = 2; i <= 10; i += 2){  // 0 / 2 / 4 / 6 / 8 / 10
// console.log(i)
// }



// Задача с интервью
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

// let arr = [ '(', '(', ')', '(', ')', ')']  //взять первый элемент и посмотреть есть ли к нему пара
// let countOpen = 0;
// let countClose = 0;

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] == '(') {
//         countOpen += 1
//     } else {
//         countClose++;
//     }
// }
// if(countOpen > countClose) {
//     console.log("( is more than ')'")
//     }
//     else if (countOpen < countClose) {
//         console.log("')' is more than '('")

//     } else {
//         console.log("The number of ')' equials the number of '('")
//     }





// // Креативное задание*(не показываем решение до понедельника):
// // Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.



// // Задачка посложнее* 
//  Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему


// //Дополнительные задачи самостоятельно. Есть массив, выведите его в обратном порядке
// let arr = [10, 12, "34", "hello", 34, "qwerty"]
// console.log(arr.length) // сколько цифр
// console.log(arr)
// let arrReverse = []
// //console.log(arr.reverse)
// for(let i = arr.length - 1; i >=0; i--){
//    arrReverse.push(arr[i])
// } 
// console.log(arrReverse)



//Нарисовать елочку и ромб  с помощью циклов 
// for (let i = 1; i <= 5; i++) {
//     let star = '';
//     for (let j = 1; j <= 1; j++) {
//         star += '*'
//     }
//     console.log(star);
// }
// for(let i = 5; i>=1; i --) {
//     let star = '';
//     for(let j = 1; j<=i; j++) {
//         star += '*';
//     }
//     console.log(star);
// }



// let lines = 7;
// let str = " ";
// let star = "*";
// for (let i = 0; i < lines; i++) {
//   str += star;
//   console.log(str);
// }


// var i = 0,
//   j = 0;
// // Желаемое количество строк
// var max = 15;
// var space = "",
//   star = "";

// while (i < max) {
//   space = "";
//   star = "";
//   for (j = 0; j < max - i; j++) space += " ";
//   for (j = 0; j < 2 * i + 1; j++) star += "*";
//   console.log(space + star);
//   i++;
// }

// let str1 = '*';
// let newStr = '';
// for(let i = 0; i < 7; i++)

// {
//     newStr = newStr + str1;
//     console.log(newStr);
// }

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//  console.log( i );
//   i++
// }

// let i2 = 3;
// while (i2 ) { // выводит 0, затем 1, затем 2
//  console.log( i2 );
//   i2--
// }

//Выведите столбец чисел от 1 до 50.
// for(let i = 0; i < 50; i++) {
//     console.log(i)
// }

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью 
//цикла for выведите все эти элементы на экран.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {

// }
// console.log(arr)

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {

// }
// console.log(arr[4])


// let arr = [2, 3, 4, 5]
// let result = 1
// for (let i = 0; i < arr.length; i++) {
// result = result * arr[i]
// }
// console.log(result)

// let arr = [2, 3, 4, 5]
// let result = 0
// for (let i = 0; i < arr.length; i+=3) {
// result = result + arr[i]
// }
// console.log(result)


//==================нарисовать елку======

// let string = "......*";
// let line = string;
// for (let i = 0; i < string.length; i++) {
//     console.log(line)
//     line = line.substring(1) + "**"   
//  }

//===================рисуем ромб=========
let string = "......*";
let line = string;
for (let i = 0; i < string.length; i++) {
    console.log(line)
    line = line.substring(1) + "**"
}
line = line.substring(1)
for (let i = 1; i < string.length; i++) {
    line = line.replace("*", ".")
    line = line.slice(0, - 1)
    //line = line.substring(1)
    console.log(line);
}
