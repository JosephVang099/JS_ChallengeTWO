/* Given the information below for Tom and Jerry. 
    - Tom - 	height:  9in   	mass: 8 g
    - Jerry - 	height: 10in 	mass: 45 g

Compare the BMI (Body Mass Index) of Tom & Jerry using a standard BMI formula:
 

    1. Store Tom & Jerry’s mass and height as variables.
    2. Calculate both their BMI’s. 
    3. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
    4. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false). */

// 1
var tomHeight = 9;
var tomMass = 8;
var jerryHeight = 10;
var jerryMass = 45;

//2
const tomBmi = bmi (tomMass, tomHeight);
const jerryBmi = bmi (jerryMass, jerryHeight);

function bmi (weight, height) {
    return (weight/(height**2))
    //value; BMI = weight/(height**2)..... found in google
};

//3
console.log(tomBmi);
console.log(jerryBmi);

const tomGreaterThanjerry = tomBmi > jerryBmi;
console.log (tomGreaterThanjerry);

//4
console.log("Is Tom's BMI higher than Jerry's? " + tomGreaterThanjerry);