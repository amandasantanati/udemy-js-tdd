// import * as R from 'ramda';
import { union as joinTogether, uniq } from 'ramda';
import sumDefault, {sub, mult as multip, divisor, PI} from './utils';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = joinTogether(arr1, arr2);
const arr4 = uniq(arr2);

console.log(arr3);
console.log(arr4);

console.log(sumDefault(3,2));
console.log(sub(3,2));
console.log(multip(3,2));
console.log(divisor(4,2));
console.log(PI);
