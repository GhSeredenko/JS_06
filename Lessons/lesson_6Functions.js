//const multiply = function(a, b) {   // function expression
//   return a * b;
// };

//function multiply(a,b) {  //function declaration
//     return a * b;
// }

// let a = 1
// let b = 3
// const multiply = (a, b) => a * b 
// console.log(multiply(a, b));


// function dontDisplayNegative(arr){
//     for (var i=0;i<arr.length;i++){
//       if (arr[i]<0) continue;   
//       console.log(arr[i])
//     }
//   }



// let name1 = [1, -2, 3, 323, 55, 0, 23, 87, 98, -1]
// function findMinNumber1(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return min
// }
// console.log(findMinNumber1(name1));


// let arr = [3, 4, 5, 6, 10]
// function minNumber(array) {
//     let min = array[0];

//     for (let i = 0; i < array.length; i++) {
//         if (min > array[i]) {
//             min = array[i]
//         }
//     }
//     return min
// }
// console.log(minNumber(arr));



// let user = {
//     name: 'Anna',
//     role: 'student',
//     age: 35,
//     car: 'Volvo',
// }
// console.log(user.name);
// console.log(user.role);
// console.log(Object.keys(user));
// console.log(user);
// console.log(typeof Object.entries(user));
// let users = {
//     user1: {
//         name: 'Anna',
//     role: 'student',
//     age: 35,
//     car: 'Volvo',
//     },
//     user2: {
//         name: 'Olga',
//     role: 'teacher',
//     age: 45,
//     car: 'VBMV',
//     }
// }
// console.log(user.user1);
// console.log(user.user2);

// console.log(Object.keys(users[""]));



let students = {
    student1: {
    name: 'Anna',
    middleName: 'Maria',
    'last name': 'Ivanova'
  }
}


const terchers = new Object()
terchers = {
    tercher1: {
    name: 'Anna',
    middleName: 'Maria',
    'last name': 'Ivanova'
    }
}

console.log(object);