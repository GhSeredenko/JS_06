// let arr = [89, 64, 29, 88, 81, 82, 25, 32, 54, 32, 42, 98, 43, 63, 87]
// for (let i = 0; i < arr.length; i++) {


// }
// console.log(arr[i]);
   //       0   1   2   3   4   5   6   7   8   9   0   1   2   3   4
// let arr = [89, 64, 29, 88, 81, 82, 25, 32, 54, 32, 42, 98, 43, 63, 87];
//   //        1   2   3   4  5    6  7    8   9   0   1   2   3   4   5
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 10; i++) {    // просто счетчик
//         for (j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {  //89 vs 64
//                 const temp = arr[j]; // 89
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
// }


// bubbleSort(arr);
// console.log(arr);

let arr = [44, 56, 46, 89, '25', 'hello', 99, [78, 15, 45]]
for(let i = 0; i < arr.length; i++){
    //if(Array.isArray(arr[i]))
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 4) {
            console.log(arr[i])
        }
    }
}

