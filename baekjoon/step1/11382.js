const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const result = input.reduce((acc, cur) => acc + cur, 0);
console.log(result);