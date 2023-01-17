// Write a function named min that takes two arguments and returns their minimum.

function min( Num1, Num2 ) {
  if (Num1 < Num2) // Num1 is less than Num2, then it returns true
    return Num1; //returns the min
      else
    return Num2; //returns the min
}

console.log ("The minimum of 0 to 15 is ", min(0, 15)); 
//min is 0

console.log ("The minimum of 0 to -15 is ", min(0, -15)); 
// min is -15