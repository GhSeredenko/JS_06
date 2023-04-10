// //«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра,
// //а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»
// let dayDistance = 3;
// let nightDown = -2;
// let distance = 0;
// let days = 0;
// let wall = 5;

// //1
// if ((distance += dayDistance) <= wall) {
//     days++
//     console.log(` - Current distance at the end of the day for day ${days} is ${distance} meters(s)`)
//     if (distance == wall) console.log("OK")
//     else console.log("Go forward!") 
//     distance += nightDown
// }
// //2
// if ((distance += dayDistance) <=wall) {
//     days++
//     console.log(` - Current distance at the end of the day for day ${days} is ${distance} meters(s)`)
//     if (distance == wall) console.log("OK")
//     distance += nightDown
// }
// //3
// if ((distance += dayDistance) <=wall) {
//     days++
//     console.log(` - Current distance at the end of the day for day ${days} is ${distance} meters(s)`)
//     if (distance == wall) console.log("OK")
//     distance += nightDown
// }
// //4 (он сюда уже не идет т.к. мы указали ограничение)
// if ((distance += dayDistance) <=wall) {
//     days++
//     console.log(` - Current distance at the end of the day for day ${days} is ${distance} meters(s)`)

//     distance += nightDown
// }
// //else console.log("Finish")
// // if (distance == wall) console.log("OK")