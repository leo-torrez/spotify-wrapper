
const sum = (numOne, numTwo) => numOne + numTwo;
const sub = (numOne, numTwo) => numOne - numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;
const div = (numOne, numTwo) => (numTwo === 0) ? 'Não é possível divisão por zero' : numOne / numTwo;

export { sum, sub, mult, div };
