
// Mild Challenges 
/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;




// 1. If divided evenly, how much would each sibling get for the week?
const split = weeklyAllowance/3
console.log(split);

// 2. How many games can Jordan buy with their cut?
const games = Math.floor(split/game)
// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.
const newGames = 16.99;
const newShoes = 44.89;


// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
const twins = (split * 2); 
const buy = Math.floor(twins/newShoes);
console.log(buy);

// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
 const twinGames = Math.floor(twins/newGames); 
 const moreGames = twinGames - games;
 console.log(moreGames); 

// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."

console.log ("The three siblings names are " + sibling1 +"," + sibling2 + ","+ sibling3); 
// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.
const length = sibling3.length;
console.log (length);

// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
let uppercase = sibling3.toUpperCase();
console.log(uppercase);
// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"
let lowercase = sibling3.toLowerCase();
console.log(lowercase);

// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.
const name = "Ricardo";
console.log(name.replace(/a/g,));

// 11. Use console.log() and a built-in method to print out "De La Rosa"
console.log("De La Rosa");
// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

const getRandomNum = () => {
    return Math.floor(Math.random() * 100);
}

const greeting = (name) =>  {
    return `Hello ${name}, I'm glad you can make it!`;
}

const  perfectRoot = (x) => {
    let root = Math.sqrt(x);
    if (Math.floor(root) === root) {
        return root;
    } else {
        return "No perfect root"
    }
}

// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    let sum = x + y;
  console.log(addNums(4, 6));
  addnNums(); 
}
// uncomment the line below, to call the function, and add one more function call
// console.log( addNums(4, 6) );


/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
//     if(name) { 
//     name = "Beyonce"
//          return "Welcome Queen!";
//  } else {
//          return `Sorry {name}, you're not Beyonce`;
//      }
// }
// Test "Beyonce" and other names to ensure it works



/// c. If the number is even, return the number divided by 2, otherwise, return the number
/// For example reduceEvens(10) => 5 -- reduceEvens(11) => 11
const reduceEvens = (x) => {
    // if( reduceEvens){
// if (x % 2 === 0) {
//         return x / 2;
    // } else {
    //     return x;
    // }
}
//Write your own function calls


// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all
const shortenString = (string) => {
// if(shortenString){
//     string.length > 10 
//     return string;

// }else{ 
//     string.erase; 
// }
// }



// Spicy Challenges
let burger = 5.00;
let fries = 3.00;
let soda = 1.00;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
// Prompt the user for their budget and call the function.
/// If no burgers, fries, and sodas can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {
prompt("What is your budget? ")
 buyBurgers();
}

// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
// Prompt the user for their budget and call the function.
/// Bonus: Round the answer to the nearest penny.
const buyMeals = (budget) => {
if(budget){
buyBurgers <= burger + fries + soda;
console.log("Sorry! You do not have enough")
 } else{
buyMeals - buyBurgers;
console.log("Thank you for buying, here is your updated budget"); 
 }
}


// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
// Prompt the user for the two sides and call the function
/// The larger side should be the hypotenuse  



// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.
// Prompt the user for a number and call the function









//liyah// 
}
}