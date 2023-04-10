// < !--You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not. -- >

// < !-- const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//         return distanceToPump <= fuelLeft * mpg
//     } -->



// < !--Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input(n) how many times the hoop goes round and it will return him an encouraging message:)

//     If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//     If he doesn't get 10 hoops, return the string "Keep at it until you get it".
// -->



// < !--У нас есть 4 сезона: Зима(12, 1, 2), Весна(3, 4, 5), лето(6, 7, 8), осень(9, 10, 11) Используя switch узнать, к какому сезону относится введенный месяц-- >


//     let month = 8
// switch (month) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("winter")
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("spring")
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("summer")
//         break;
//     case 8:
//     case 9:
//     case 10:
//         console.log("fall")
//         break;
//     default:
//         console.log('error')
// }


// Write a function that will check if two given characters are the same case.

//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0

// Examples

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// let a;
// let b; 

// if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
//     return -1

//   }  else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//         return 1
//   } else return 0
// }
