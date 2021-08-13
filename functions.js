/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/
const writeHeader = function(title) {
    console.log(`\n\n<------------- ${title.toUpperCase()} ------------->`)
}

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
writeHeader("EXERCISE 1")

const area = function(num1,num2) {
    let result = num1 * num2
    return result
}
console.log(area(11,12))
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
writeHeader("EXERCISE 2")

const crazySum = function(int1,int2) {
    if(int1 === int2){
        let result = (int1 + int2)*3
        return result
    } else {
        let result = int1 + int2
        return result
    }
    
}
console.log(crazySum(2,2))
console.log(crazySum(1,2))
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
writeHeader("EXERCISE 3")

const crazyDiff = function(givenNumber) {
    if(givenNumber < 19) {
        let result = 19 - givenNumber
        return result
    } else {
        let result = (givenNumber -19)*3
        return result
    }
}
console.log(crazyDiff(15))
console.log(crazyDiff(25))
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
writeHeader("EXERCISE 4")

const boundary = function(intN) {
    if((20 <= intN && intN <= 100) || (intN === 400)) {
        return true
    } else {
        return false
    }
}
console.log(boundary(45))
console.log(boundary(15))
console.log(boundary(120))
console.log(boundary(400))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
writeHeader("EXERCISE 5")

const strivify = function(givenString) {
    if(givenString === "Strive"){
        return givenString
    } else {
        return "Strive" + givenString
    }
}
console.log(strivify("Strive"))
console.log(strivify("Adam"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
writeHeader("EXERCISE 6")
const check3and7 = function(posNumber) {
    if(posNumber % 3 === 0 || posNumber % 7 === 0) {
        return true
    } else{
        return false 
    }
}
console.log(check3and7(9))
console.log(check3and7(14))
console.log(check3and7(16))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
writeHeader("EXERCISE 7")
const reverseString = function(normalString){
    return normalString.split("").reverse().join("");
}
console.log(reverseString("Strive"))
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
writeHeader("EXERCISE 8")

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
writeHeader("EXERCISE 9")
const cutString = function(str) {
    let result = str.slice 
}

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
writeHeader("EXERCISE 10")
/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/