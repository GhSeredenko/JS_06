
// let str = "Hello world it's me!"
// //         01234567890123456789     index
// for(let i = 0; i < str.length; i++) {
// console.log(str[i]);
// }

// let str = "Hello world it's me!"
// let arr = ['a', 'Anna', 'Stan', Pete, ['Monolog', 'hello']]
// for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 1) 
//         console.log(str[i]);
//     }
//console.log(str[i]);
//}

// let str = "Hello world it's me!"
// let arr = ['a', 'Anna', 'Stan', Pete, ['Monolog', 'hello']]
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 1) {
//         console.log(arr[i]);
//     }
//     //console.log(str[i]);
// }

// let str = "Hello world it's me!"
// let result = []
// let arr = ['a', 'Anna', 'John', 'Stan', 'Peteo', ['Monolog', 'hello', 4, 8,]]
// // index          1              3                      4
// //                                   0             1     2  3
// //j  index        0123            01234              0123
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] === 'o') {
//             //          console.log(arr[i]) чтобы затолкнуть надо название массива куда.пуш
//             result.push(arr[i])
//             console.log(result)
//         }
//         // if (arr[i] === 'o') {
//         //      console.log(arr[i]);
//         // }
//         //console.log(str[i]);
//         ////}
//         //console.log(arr[4][0].length);
//         console.log(result)
//     }
// }

let str = "Hello world it's me!"
let result = []
let arr = ['a', 'Anna', 'John', 'Stan', 'Peteo', ['Monolog', 'hello', 4, 8,]]
// index          1              3                      4
//                                   0             1     2  3
//j  index        0123            01234              0123
for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result.push(arr[i])
                } else {
                    for(let j = 0; j < arr[i].length; j ++) {
                        if(typeof arr[i][j] === 'number') {
                            result.push(arr[i][j])
                        }
                    }
                }

}

