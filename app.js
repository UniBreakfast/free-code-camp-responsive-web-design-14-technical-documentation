import {variable, constant, setter, getter} from './module.js';

console.log(variable);
console.log(constant);

setter(42);

console.log(variable);

// variable = 42;
// console.log(getter());
