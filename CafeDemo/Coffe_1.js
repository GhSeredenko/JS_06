//
//How to make coffe instructions step by step

// console.log("How to make coffee");

// let coffee = "black coffee";
// let water = "hot water";
// let sugar = "white sugar";
// let milk = "whole milk";

// let step1 = `1. Take a cup and put some ${water}.`;
// let step2 = `2. Take a cup with ${water} and add ${coffee}.`;
// let step3 = `3. Take a cup with ${water} and added ${coffee} and add ${sugar} and ${milk}.`;

// console.log(`\n`, step1, `\n`, step2, `\n`, step3);




// let a = "Take a capsule " 
// console.log(a) 

// let b = "Put it in the coffee machine" 
// console.log(b) 

// let c = "click on button" 
// console.log(c)

// let cup = "Select cup size" 
// console.log(cup) 

// let add = "Add milk and shugar"
// console.log(add) 

// let end = "Enjoy your coffee!"
// console.log(end) 


// let nameOfCoffee = "Espresso"

// let cupSize = "Small"

// let smallPrice = 4;
// let mediumPrice = 5;
// let bigPrice = 6

// function makeCoffee(nameOfCoffee, cupSize ) {
// if (nameOfCoffee == "Latte" && cupSize == 'small'){
//     return (`Your order is: coffee Latte, size: Small. Your order price is: $ ${smallPrice}`)
//   }
// }
// console.log(`Your order is: coffee Latte, size: Small. Your order price is: $ ${smallPrice}`)

// if (nameOfCoffee == "Latte" && cupSize == "Big") {
//   console.log(`Your order is: coffee Latte, size: Big. Your order price is: $ ${bigPrice}`)
// }

// if (nameOfCoffee == "Latte" && cupSize == "Medium")
// console.log(`Your order is: coffee Latte, size: Medium. Your order price is: $ ${mediumPrice}`)

// if ( nameOfCoffee == "Capuccino" && cupSize == "small") {
//    console.log(`Your order is: coffee Capuccino, size: Small. Your order price is: $ ${smallPrice}`)
// }

// if (nameOfCoffee == "Capuccino" && cupSize == "Medium") {
//    console.log(`Your order is: coffee Capuccino, size: Medium. Your order price is: $ ${mediumPrice}`)
// }

// if (nameOfCoffee == "Capuccino" && cupSize == "Big") {
//     console.log(`Your order is: coffee Capuccino, size: Big. Your order price is: $ ${bigPrice}`)
// }

// if (nameOfCoffee == "Espresso" && cupSize == "Big") {
//     console.log(`Your order is: coffee Espresso, size: Big. Your order price is: $ ${bigPrice}`)
// }

// if (nameOfCoffee == "Espresso" && cupSize == "Medium") {
//     console.log(`Your order is: coffee Espresso, size: Medium. Your order price is: $ ${mediumPrice}`)
// }

// if ( nameOfCoffee == "Espresso" && cupSize == "Small") {
//   console.log (`Your order is: coffee Espresso, size: Small. Your order price is: $ ${smallPrice}`)
// }



//COFFEE
//declare all variables
let cupSize
let smallCup = "small cup";
let mediumCup = "medium cup";
let largeCup = "large cup";
let water;
let hotWater = "hot water";
let coldWater = "cold water";
let coffeType;

//Welcome message
function showWelcomeMessage() {
    console.log("Would you like some coffee?");
    console.log("Please, choose the cup size");
}

//Show cup sizes and their prices
function showCupOptions() {
    let smallCup = "small cup";
    let mediumCup = "medium cup";
    let largeCup = "large cup";
    let price = 5;

    let cupsOptions = [[smallCup, price], [mediumCup, (price * 1.5)], [largeCup, price * 2]]
    for (let i = 0; i < cupsOptions.length; i++) {
        console.log(cupsOptions[i][0] + '-' + cupsOptions[i][1] + '$');
        if (i == cupsOptions.length - 1) {
            console.log('\n');
        }
    }
}

//Show coffe types with ingredients
function showCoffeeTypesAndIngredients() {
    let latte = "Latte";
    let icedCoffee = "Iced Coffee"
    let beansBrasilia = "Brasilia ground beans";
    let beansColumbia = "Columbia ground beans";
    let hotWater = "hot water"
    let coldWater = "cold water"

    let latteIngredients = `${latte}: \n 1 spoon of ${beansArabica} \n milk \n`
    let icedCoffeeIngredients = `${icedCoffee}: \n 1 spoon of ${beansEthiopian} \n ${coldWater} \n milk \n`

    console.log('We have following coffee types:  \n');
    let menu = [latteIngredients, icedCoffeeIngredients]

    for (let i = 0; i < menu.length; i++) {
        console.log(menu[i]);
    }
}

function setWaterForCoffee(coffeeType) {
    if(coffeType.toLowerCase() == 'iced coffee') {
}

//Show cup sizes and their prices
function showCupOptions()
let cupSizes = [smallCup, mediumCup, largeCup]
for (let i in cupSizes) {
    if (cupSizes[i] == smallCup) {
        console.log(cupSizes[i] + '-' + price + "$");
    }
    else if (cupSizes[i] == mediumCup) {
        console.log(cupSizes[i] + '-' + price * 1.5 + "$");
    }
    else if (cupSizes[i] == largeCup) {
        console.log(cupSizes[i] + '-' + price * 2 + "$");
    }
    if (i == cupSizes.length - 1) {
        console.log('\n');
    }
}

//Show coffee types with ingredients
// let latteIngredients = `${latte}: \n 1 spoon of ${beansArabica} \n milk \n`
// let icedCoffeeIngredients = `${icedCoffee}: \n 1 spoon of ${beansEthiopian} \n ${coldWater} \n milk \n`

// console.log('We have following coffee types:  \n');
// let menu = [latteIngredients, icedCoffeeIngredients]

// for (let i = 0; i < menu.length; i++) {
//     console.log(menu[i]);
// }

//Make a choice
coffeType = icedCoffee;
cupSizes = smallCup;

if (coffeType == icedCoffee) {
    water = coldWater;
} else {
    water = hotWater;
}

if (cupSizes == mediumCup) {
    price *= 1.5
}
else if (cupSizes == largeCup) {
    price *= 2
}

// Output for client
let order = `You choosed a ${cupSizes} of ${coffeType} \n Follow the steps:`;
let step1 = `1 Take a ${cupSizes}`;
let step2 = "2 Put 1 spoon of coffee in it";
let step3 = `3 Pour ${water} in a cup with coffee`;
let step4 = "4 Pour milk in a cup of coffee";
let step5 = "5 Stir coffee in a cup with a spoon";
let orderPrice = `The order price is ${price}$`;
let result = `Enjoy your coffee!`;

//add steps to recipe
let recipe = [step1, step2, step3, step4, step5]
let clientRecipe = ''
let isLactoseFree = false
for (let i = 0; i < recipe.length; i++) {
    if (isLactoseFree == true && recipe[i] == step4) continue
    clientRecipe = clientRecipe + recipe[i] + '\n'

}
console.log(order + '\n' + clientRecipe + '\n' + orderPrice + '\n' + result);
