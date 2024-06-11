const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

const cal = 42;
const arr = input.map(n => n % cal);
const set = new Set(arr);
const result = set.size;
console.log(result)