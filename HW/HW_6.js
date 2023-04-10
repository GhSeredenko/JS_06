// //let arr = [80, 117, 115, 104, 45, 85, 112, 115];
// let arr = ['t', 'e', 's', 't']
// function check(a, x){
// let arr1 = [...a];

// //let b = a.toString;
// return a.indexOf(x) >= 0;
// };

// console.log(check(arr, 85));
// console.log(check(arr, 86));

//let arr = [80, 117, 115, 104, 45, 85, 112, 115];
// let arr = ['t', 'e', 's', 't']; 
// function check(a,x){
//   let b =  a.indexOf(x);
//   console.log(b);
//   return b >= 0;
// };

// function check(a, x) {
//     return a.includes(x);
// }

// console.log(check(arr, 'e'))
// console.log(check(arr, 112))

//a wolf in sheeps clothing
// let arr = ["walf"]
// function warntheSheep(queue) {
//     //let a = queue.length - (queue.indexOf('wolf') + 1);
//     if (queue[queue.length - 1] == 'wolf') {
//         return "Pls go away and stop eating my sheep"
//     } else{
//         let a = queue.length - (queue.indexOf('wolf') + 1);
//         return `Oi! Sheep number ${a}! Toy are about to be eaten by a wolf!`
//     }
// }
// console.log(warntheSheep(arr));

// function warnTheSheep (queue) {
//     if (queue.indexOf('wolf') == queue.length -1) 
//     return `Pls go away and stop eating my sheep`;
//     let r = queue.indexOf('sheep', queue.lastIndexOf('wolf'))
//     return `oi! sheep number ${queue.length - r}! You are about to be eaten by a wolf!`
//   }
//   console.log(warnTheSheep (arr))



// let arr = [1, 2, 42, 32, 55, 70]
// function maxValue(array) {
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (max < array[i]) {
//             max = array[i]
//         }
//     }
//     return max
// }
// let arr1 = "2563ghlj"
// console.log(maxValue(arr1));

// let arr = [];
// for(let i = 0; i < 10; i++) {
//     if(i === 0 || i === 9) {
//         arr[i] = 1;
//     } else {
//         arr[i]=0
//     }
// }
// console.log(arr);

// let arr = [];
// for(let i = 0; i <6; i++){
//     if((i+1) % 2 == 0){
//         arr[i] = 1;
//     } else {
//         arr[i] = 0
//     }
// }
// console.log(arr);

// let arr = [];
// for(let i =1; i <50; i++){
//     if(i%2!==0) {
//         arr.push(i)
//     }
// }
// console.log(arr);

// let number = function(num) {
//     let chet = 0, nechet = 0;
//     for(let i = 0; i < num.length; i++) {
//       if(num[i]%2==0)
//       chet++;
//       else nechet++;  
//     }
//     return [chet, nechet];
// }
// let a = number("5548495803849")
// console.log(a);

// let number = function(palindrom) {
//     for(let i = 0; i < stroka.length; i++){
//         if(stroka[i] ==  )
//     }
// }

// function palindrom(str){

// }

// function factirial_1(n) {
//     let p = 1;          //произведение
//     for(let i = 1; i <= n; i++){
//     p *= i
// }
// console.log(p);
// }
// factirial_1(5)
// let result = 1;
// function factorial_2(n) {
//     if (n == 0) return;
//     result *= n;
//     factorial_2(n - 1);
// }
// factorial_2(5)
// console.log(result);

// function factorial_3(n) {
//     return n == 1 ? 1 : n * factorial_3(n - 1);

// }
// console.log(factorial_3(5));


// 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
// function fib(n){ 
// if (n == 0) return 0;
// if (n == 1) return 1;
// return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(8));

// let count = 0;
// function createCount() {
//     count++;
//     console.log(count);
// }
// createCount()

// function hello (){
//     console.log('Hello');
// } )()
// hello()


//const arr = [12, 4, 8,,,,,,,j];   //eto literals

// const arr = new Array(10);
// const arrNew = [];
// arr.length = 3;
// console.log(arr);

// /obrachenie k elementu console.log(arr[2]);
// console.log(arr[arr.length - 1]);
// //pop/push    shift/unshift

//палиндром 1
// str = "Anna";
// function palindrom(str) {
//     let arr = str.toLowerCase().split(' ')
//     let arrNew = arr.slice()
//     arrNew.reverse()
//     let result = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arrNew[i]) {
//             result = true
//         }
//     }
//     return result

// }
// console.log(palindrom(str))



// палиндром 2
// function palindrom(data) {
//     data = data
//         .toString()
//         .toLowerCase()
//         .replace(/\s|[,.!?"/-]/g, "");
//     return data === data.split(" ").reverse().join(" ");
// }
// console.log(palindrom("шалаш"));
// console.log(palindrom("Анна"));
// console.log(palindrom("А муза рада музе буз ума да разума"));
// console.log(palindrom('"Пустите!"- Летит супу миска Максиму"'));
// console.log(palindrom(12321));

let array = [1, 22, -4, 89, 100, 0]
function findMaxNumber1(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
                    }
    }
    console.log(max);
}
findMaxNumber1(array)

let arr1 = [0, -1, -3, -5, -75]
findMaxNumber1(arr1)
