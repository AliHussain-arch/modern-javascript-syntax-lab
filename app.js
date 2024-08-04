function Banner (num){
    if(num > 0 && num <= 9){
        console.log()
        console.log('|******************|')
        console.log(`|********0${num}********|`)
        console.log('|******************|')
        console.log()

    }else{
        console.log()
        console.log('|******************|')
        console.log(`|********${num}********|`)
        console.log('|******************|')
        console.log()
    }
};

// Excercise 1
Banner(1);
// Use `.map()` to iterate over the following array:
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// Create a new array where each value is multiplied by 2 and log the new array.
// Your code here
const nums2 =  nums.map((int)=>{
    return int * 2;
});
console.log(nums2);


// Excercise 2
Banner(2);
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
// Your code here
const [firstTopping, secondTopping ] = pizzaToppings;
console.log(firstTopping);
// OR
console.log(pizzaToppings[0]);

console.log(secondTopping);
// OR
console.log(pizzaToppings[1]);

// Excercise 3
Banner(3);
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
make: 'Audi',
model: 'q5',
};
// Your code here
const {make, model} = car;
console.log(make);
// Equivalent in dot notation
console.log(car.make);

console.log(model);
// Equivalent in dot notation
console.log(car.model);

// Excercise 4
Banner(4);
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// Your code here
const controversialPizzaToppings = [...pizzaToppings];
console.log(controversialPizzaToppings);

// Excerise 5
Banner(5);
// Duplicate the following object and spread its values into a new variable `myCar`.


// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here
const myCar = {...car};
myCar.model = 'q7';
console.log(myCar.make);
console.log(myCar.model);

//Excercise 6
Banner(6);
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
// Your code here
const propertyName = 'Email';
const userProfile = {
    [propertyName] : 'sampleEmail@mail.com',
}
console.log(userProfile)

// Excercise 7
Banner(7);
console.log('Solved in exportingFile and importingFile')

// Excercise 8
Banner(8);
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function sentenceConstructor (noun = `cat`,adjective = `white`) {
    console.log(`The ${noun} is ${adjective}.`);
}
sentenceConstructor();
sentenceConstructor(`dog`);
sentenceConstructor(undefined,`black`);
sentenceConstructor(`dog`,`black`);

// Excercise 9
Banner(9);
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
let reaction = pizza === 'tasty' ? 'yum' : 'yuck';
console.log(reaction);

//Excercise 10
Banner(10);
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'English';

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light';

// Log the result
console.log('User theme setting:', USER_THEME);

//Excercise 11
Banner(11);
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
};
  
let cat = adventurer.cat?.age; // Your code here
   
console.log(cat);

  