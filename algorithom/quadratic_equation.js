/**
 * 
 * In the below code, the solveQuadraticEquation function takes three coefficients a, b, and c representing the quadratic equation ax^2 + bx + c = 0. 
 * It calculates the discriminant using the formula b^2 - 4ac.

If the discriminant is positive, there are two distinct real roots, and they are calculated using the quadratic formula (-b ± √(b^2 - 4ac)) / (2a).

If the discriminant is zero, there is a single real root, and it is calculated using the formula -b / (2a).

If the discriminant is negative, there are no real roots, so an empty array is returned.

In the example usage, we solve the quadratic equation 2x^2 - 5x - 3 = 0. The roots [3, -0.5] are printed to the console.

Note: This code assumes that the input values for a, b, and c are valid and that a is not zero. Additional input validation may be needed depending on your specific use case.

        ********quadratic formula (-b ± √(b^2 - 4ac)) / (2a)************
 */

function solveQuadraticEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  } else {
    return [];
  }
}

// Example usage:
const a = 2;
const b = -5;
const c = -3;

const roots = solveQuadraticEquation(a, b, c);
console.log(roots); // Output: [3, -0.5]
