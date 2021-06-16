// myAge refers to our human age 
const myAge = 23;

// earlyYears has a value of 2 as the first two years of a dog’s life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;

// Since we already accounted for the first two years, we take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2;

// Each year following equates to 4 dog years. We are multiplying laterYears by 4 to calculate the number of dog years accounted for by our later years
laterYears *= 4;

// Your dog years are the sum of the years calculated above 
const myAgeInDogYears = earlyYears + laterYears;

// Using toLowerCase method to convert my name to smallcaps 
let myName = "Raashi";
myName = myName.toLowerCase();

// Using string interpolation to display the values and derive meaning from the exercise.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which means I am ${myAgeInDogYears} years old in dog years.`)
