// let arr = "Hello world it's me !"
// //         01234567890123456789    index
// //         
// for (let i = 0; i < arr.length; i++){
//     //if(i % 2 === 1) { 
//         if (arr[i].length > 3) {

//         }
//         console.log(arr[i])
//     }


// let arr = ['a', 'Anna', 'Stan', 'Pater', 'Robert', ['dom', 'hello', 4,7,78,36, 'world']]
// for (let i = 0; i < arr.length; i++) {
//     //     if(i % 2 === 1) {
//     //if (arr[i].length > 3) {
//         //console.log(arr[3][2])
//         console.log(arr[5][1][0]);
//   //  }
// //}
// let arr = ['a', 'Anna', 'Stan', 'Pater', 'o', ' Robert', ['dom', 'hello', 4,7,78,36, 'world']]
// for (let i = 0; i < arr.length; i++) {

//        //if (arr[i] === 'o') {
//         //console.log(arr[3][2])
//         console.log(arr[i]);
//     }
// }
// let result = []
// let arr = ['a', 'Anna', 'Stan', 'Pater', 'o', ' Robert', ['dom', 'hello', 4, 7, 78, 36, 'world']]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] === 'o') {
//             result.push(arr[i])
//             //console.log(arr[3][2])
//             console.log(arr[i]);
//         }
//     }
// }

// let result = []
// let arr = ['a', 'Anna', 'Stan', 'Pater', 'o', ' Robert', 12, ['dom', 'hello', 4, 7, 78, 36, 'world']]
// for (let i = 0; i < arr.length; i++) {
    //for (let j = 0; j < arr.length; j++) {
//     if (typeof arr[i] === 'number') {
//         result.push(arr[i])
//     } else {
//         for (let j = 0; j < arr.length; j++)
//             //console.log(arr[3][2])
//             if (typeof arr[i][j] === 'number') {
//                 result.push(arr[i])[j]
//             }
//     }
// }
// console.log(result)



let result = []
let arr = ['a', 'Anna', 'Stan', 'Pater', 'o', ' Robert', 12, ['dom', 'hello', 4, 7, 78, 36, 'world']]
for (let i = arr.length-1; i >=0; i--) {
    console.log(arr[i]);
}
console.log(arr[i]);



//Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'.
//С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.

// let obj = {
//     'Минск': 'Беларусь',
//     'Киев': 'Украина',
//     'Ксения': 'отлично'
// }
// for(let key in obj) {
//     console.log(key + ' - это ' + obj[key] + '.')
// }

//Выведите столбец чисел от 1 до 100

// for(let i = 100; i >= -1; i--) {
// console.log(i)
// }
// //Выведите столбец четных чисел в промежутке от 0 до 100
// for(let i = 2; i< 100; i+=2){

// }
// //if( i % 2 == 0){
//     console.log(i);
// //}

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
//   }

//	Заполните массив 10-ю иксами с помощью цикла

// for(let i = 1; i <=10; i++){
//     let str = "x"
//     console.log(str);
// }

// let arr = [];
// for (let i = 0; i < 10; i++) {
// 	arr[i] = 'x';
// }
// console.log(arr);

//	Заполните массив числами от 1 до 10 с помощью цикла
// let arr = []
// for(let i = 1; i <= 10; i++) {
// arr[i] = arr.push(i)

// }
// console.log(arr);

// let arr = [];
// for (let i = 1; i <= 10; i++) {
// 	arr.push(i);
// }
// console.log(arr);

//Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла.
//Дроби округляйте до двух знаков в дробной части
// let arr = []
// for(let i = 0; i < 10; i++) {
// arr.push(Math.random() .toFixed(2))
// }
// console.log(arr);
//
//
//