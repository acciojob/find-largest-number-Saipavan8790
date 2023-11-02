function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    if (b === c) {
      return a; 
    }
    return a;  
  } else if (b >= a && b >= c) {
    if (a === c) {
      return b; 
    }
    return b; 
  }  
    if (a === b) {
      return c;
    }
    return c;
   
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
