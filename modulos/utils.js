function sum(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

const PI = 3.14;

export { mult, div as divisor, PI };

export default sum;
