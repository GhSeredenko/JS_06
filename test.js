//console.log("Hello, Svitlana!")

/*let kidsTicket, adultsTicket, age, price, veterans, seniors;
kidsTicket = "Hello Kitty";
adultsTicket = "Ray";
age = 15;
if (age >= 18) {
    alert(`Welcome to ${adultsTicket} movie`)
    console.log(`Welcome to ${adultsTicket} movie`)
}
else{
    alert(`Go to ${ kidsTicket }`)
}

let kidsTicket, adultsTicket, age, price, isVeterans, seniors;
kidsTicket = "Hello Kitty";
adultsTicket = "Ray";
age = prompt("How old are you?");
let totalPrice;
let guestNum = prompt("How many tickets do you need?")
price = 100;   
isVeterans = prompt("Are you veteran? Please, enter yes/no", "no")     
if (age >= 18 && age < 65 && isVeterans === "no") {
    totalPrice = guestNum * price;
    //alert(`Welcome to ${adultsTicket} movie`);
    console.log(`Price for ${guestNum} tickets for ${adultsTicket} movie will be USD ${totalPrice}`);
} 
else if(isVeterans === "yes" || age >=65) {
  totalPrice = guestNum * (price * 0,8);
  console.log(`Price for ${guestNum} tickets for ${adultsTicket} movie will be USD ${totalPrice}`);
}
else{
  totalPrice = guestNum * (price/2);
  console.log(`Go to ${kidsTicket}`);
  //alert(`Go to ${kidsTicket}`);
}
*/

//вес/рост **2
//BMI = weight деленный на high // Задача 1 Напишите формулу, которая вычисляет BMI (Body Mass Index), 
//  BMI = вес (кг)/ рост (м) в квадрате. Напечатайте результат в консоли. Выведите вместе сo своим именем на 
//страницу + вывести в зависимости от BMI какой уровень веса.
//Вывести дополнительно статус: если BMI менбше 18.5 underweight, 18.5-24.9 - Normal weight,  25 - 30 - Overweight, болше 30 - Obese


// let kg = 56;
// let mtr = 1.68;
// const BMI = kg / mtr**2;
// let name = "Vika";

//console.log(`BMI mass of ${name} = ${BMI}`);

/* let kg = 50;
let mtr = 150;
let BMI = kg / mtr ** 2;
let name = "Lana"; */

/* console.log (BMI)
console.log (name)

if (BMI < 18.5) {
  console.log("Underweight")
}
else if(BMI > 18.5 && BMI < 24.9){
  console.log("Normal weight")
}
else if(BMI >= 24.9 && BMI < 30){
  console.log("Overweight")
}
else {
  console.log("Obese")
} */

/* if (BMI < 18.5) {
  console.log("Underweight")
}
else {
  if(BMI >= 18.5 && BMI <= 24.9) {
    console.log("Normal weight")
  }
  if(BMI >= 24.9 && BMI <= 30){
    console.log("Overweight") 
  }
  if( BMI > 30) {
    console.log("Obese")
  } 
} */

/*Напишите программу по согласованию отпуска в зависимости от месяца. 
Если месяц “July” или “August”, 
то программа должна показать - ‘approved’, 
если другие месяцы, то - “denied”.*/

/* let month = "July";

if (month.toLowerCase() ===  "july" || month.toLowerCase() === "august") {
  console.log("Approved")
}
else {
console.log("Denied")
}
 */

/* Напишите программу для расчета стоимости билетов. 
Для пассажиров старше 18 лет- полная цена, 
для младенцев младше 2 лет - 10% стоимости, для детей от 2-х до 18ти лет - 50 % стоимости, 
для пенсионеров старше 65 лет - 60% стоимости */

/* Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'. */

/* let a = 10;

if(a == 10)
{
  console.log('Верно');
}
else 
{
  console.log('Неверно')
}
 */
/* Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', 
иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2. */

/* let a = 2

if(a > 0 && a < 5) {
  console.log("Верно");
}
else {
  console.log("Неверно")
} */

//Задача для наших новичков:
/* "В переменной min лежит число от 0 до 59. 
Определите в какую четверть часа попадает это число 
(в первую, вторую, третью или четвертую)." */

/* let min = 59
if (min >= 0 && min <= 15) {
  console.log("First quarter")
}
else {
  if (min >= 16 && min <= 30) {
    console.log("Second quarter")
  }
  else {
    if (min >= 31 && min <= 45) {
      console.log("Third quarter")
    }
    else {
      if (min >= 46 && min <= 59) {
        console.log("Forth quarter")
      }
    }
  }
} */

/* Домашка для новичков!
1. Напишите программу для расчета стоимости билетов. 
Для пассажиров старше 18 лет- полная цена, 
для младенцев младше 2 лет - 10% стоимости, 
для детей от 2-х до 18ти лет - 50 % стоимости, 
для пенсионеров старше 65 лет - 60% стоимости.


let basePrice = 100;
let age18To65 = basePrice
let age0And2 = basePrice * 0.1
let age2And18 = basePrice * 0.5
let age65Pluss = basePrice * 0.6
let userAge  


if (userAge >= 0 && userAge < 2) {
  console.log(`Your price is ${age0And2}`)
}
else {
  if (userAge >= 2 && userAge <= 18) {
    console.log(`Your price is ${age2And18}`)
  }
  else {
    if (userAge >= 18 && userAge < 65) {
      console.log(`Your price is ${age18To65}`)
    } else {
      if(userAge >=65){
      console.log(`Your price is ${age65Pluss}`)
    }
    else console.log("Enter your age")
  }

}
}
/* console.log("type", + typeof(userAge)) */


/* 2. Напишите программу которая проверит число четное или нечетно и 
выведет число и его четность в консоль. */

/* let num = 80
if(num % 2 === 0) {                            //(если это число = четному){
  console.log(`${num}  "Ваше число четное"`)                  //(это четное число)
}
else {
  console.log(`${num}  "Ваше число нечетное"`)      // ("Это число не четное, т.к. числа бывают либо четные, либо не четные. 
                                                       //А четные числа я уже задействовала" в конструкции на 185 стр.")
} */

/* let massiveName = [5, "3", "hello"] {
//                   0   1     2    

//console.log(massiveName.length)
console.log(massiveName[1])

} */

/* let number = 15; // здесь нужно указать конкретное число для проверки

if (number % 2 === 0) {
  console.log(number + ' - четное число');
} else {
  console.log(number + ' - нечетное число');
} */



// Переберите все четные числа от нуля до ста и выведите их в консоль


/* 
let arr = [15, 3, 21, 190, "like", 0, "?", 3, 12, "qwerty"]
      //   0   1   2  3     4      5   6   7  8     9
console.log(arr)
console.log(arr.length)
console.log(arr[3])
 */


/* let arr = [12, 33, 56]
console.log(arr.length)
console.log(arr[1])
console.log(arr) */

/* let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9, 10]
console.log(arr[10])
console.log(arr.length)
console.log(arr) */

// let a = 6
// let b = 2
// let operation = "/"

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
//         if(b === 0) {
//             console.log("Error. Can't devide by 0")
//         } else {
//         console.log(a /b);
//         }  
//         break;
//     default:
//         console.log("Error. Incorrect action");
// }

// let companyName = "ECMAScript"
// if(companyName == "ECMAScript") {
//   console.log("Right!")
// } else {
//   console.log("Dont you know?")
// }
//===================
// let number = 7
// if (number > 0) {
//   console.log("1")
// }
// else if (number < 0) {
//   console.log("-1")
// }
// else {
//   console.log("0")
// }
//=================
// for (let i = 0; i < 7; i++) {
//   let star = '';
//   for (let j = 0; j < i; j++) {
//       star += '*';
//   }
//   console.log(star);
// }

//вывести четные числа  c 2 до 100 =====

// for (let i = 1; i <= 100; i+=2) {

//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//Дан массив с элементами 2, 5, 9, 15, 0, 4. 
//С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, 
//которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 0, 4]
// for(let i = 0; i < arr.length; i++) {
//   if( arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

//         <  <   <   >  <
// let arr = [10, -5, -9, -15, -1, -20]
// let max = arr[0] 
// for(let i = 1; i < arr.length; i++) {
//   if( max < arr[i]) {
//     max = arr[i]
//   }

// }
// console.log(max);
//Сделать проверку с конца цикла

// let arr = [10, -5, -9, 15, -1, -20]
// let max = arr[0] 
// for(let i = 15; i < arr.length; i++) {
//   if( max < arr[i]) {
//     max = arr[i]
//   }
// }
// console.log(max);

// let arr = [10, 5, 9, 15, 1, 2]
// let max = arr[arr.length-1]
// for(let i = 4; i >=0; i--) {
//   if( max < arr[i]) {
//     max = arr[i]
//   }
// }
// console.log(max);

//дз найти минимум 

// let arr = [15, 46, 74, 99, 8, 12, 24];
// let newLength = arr.push('F', [1,2,3,4])
// //console.log(arr.join(' '));
// console.log(arr.join("\n"));
// let str = "Hello world";
// console.log(str.split());



// let arr = ["25", "utro", 89, 59, 17]
// arr.push(["hello", 23, 90])
// console.log(arr);
// arr.splice(1,1, "mama")
// console.log(arr)
// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// вложенный форлуп. 25 печатал, а 89, 59, 17 не выводил. 
// let arr = ['25', 'mama', 89, 59, 17, ['hello', 23, 90]]
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     console.log(arr[i]);
//   } else {
//     for (let j = 0; j < arr[i].length; j++)
//       console.log(arr[i][j]);
//   }
// }
//вставить слова привет после числа 89
// let arr = ['25', 'mama', 89, 59, 17, 'hello', ['hello', 23, 90]]
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 'hello') {
//     console.log(arr[i]);
//   }
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] === 'hello') {
//       console.log(arr[i][j]);
//     }
//   }
// }

// let arr2 = ['25', 'mama', 89, 59, 17, 'hello', ['hello', 23, 90]]
// let index = 0;
// while(index < arr2.length) {
//   console.log(arr2[index]);
//   index++
// }

let result = 1
let arr3 = [2, 3, 4, 5]
for(i = 0; i< arr3.length; i++){
  result = result * arr3[i]
}
console.log(result);