
// Nested if (look snail in HW_2)
/* let login = true;
let course1 = "js"
let course2 = "java"
let course = course1
let region = "USA"

if (login == true) {
    if (course == course1) {
        console.log("Welcome!")
        if (region != "USA") console.log("Wake up early!")
    }
    else console.log("Go to java")
}
else {
    console.log("Login is not correct")
} */

//==================switch================ (редко встречается)
//switch(expression) {
//  case x:
//      code block
///    break;
//  case y:
//      code block
//     break;
//  default:
//      code block
//}

/* let day = "Wednesday";
switch (day) {
    case "Tuesday":
        console.log("Tuesday");
        console.log("OK")
        break;
    case 3:
        console.log("Wednesdayy");
        console.log("OK")
        break;
    case 4:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Another day");
}
 */
// ================STRING длина строки, индекс буквы 
// let phrase = "Hello world!";
// let space = "";
// //phrase.lenght

// console.log(phrase.length); //выведет длинну фразы 12 символов 
// console.log(space.length); // там нет символов

/* index:
"Hello world!" 0-11
 01234567891011 */

/* console.log(phrase[11])
console.log(space[0])
console.log(phrase[11])
console.log(space[11]) */

/* //string.toLowerCase();
console.log(phrase.toLowerCase());
//string.toUpperCase();
console.log(phrase.toUpperCase()); */

// =================Array=============




//=========repeat string=========
let str1 = "+/"; //repeat 7
let newStr = "";
let i 
for (i = 0; i < 7; i++) {  //0 1 2 3 4 5 6
    newStr = newStr + str1;
    console.log(str1 + i);
    }


//===============find sum===========
let sum = 0;
for (let i = 1; i <=10; i++){   //1 sum = 1   i = 2 sum = 3; i = 3 sum = 6
    sum += i;
    console.log(sum);
}

// 0 + 1 = sum 1           //1
// sum 1 + (i 2) = sum 3   //2
// sum 3 + (i 3) = sum 6   //3
// 6 + 4 = 10              //4


// ============exponentiate======
let num = 5;   
let result = 1
for (let i = 1; i <= 3; i++) {    // i = 1; result = 1 * 5 = 5
    result = result * num;        // i = 2; result = 5 * 5 = 25
}                                 // i = 3; result = 25 * 5 = 125
console.log(result);