```
import { numJS } from "../num-js/numjs";

const { aadd, arange, sum, chunk, duplicates, ones, zeros, max, min } = numJS;

console.log(aadd([1, 0, 4])); // [ 2, 0, 8 ]

console.log(arange(1, 11)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

console.log(sum([1, 2, 3])); // 6

const ch = chunk([1, 2, 3, 4, 5, 6], 2);
console.log(ch.data); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

console.log(duplicates([1, 2, 3, 4, 1, 2, 3, 4, 5, 6])); // [ 1, 2, 3, 4 ]

console.log(ones(3, 4)); // [ [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ] ]

console.log(zeros(3, 4)); // [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]

console.log(max(arange(10, 2))); // 10

console.log(min(arange(10, 2))); // 3
```
