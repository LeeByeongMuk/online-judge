const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const num = parseInt(input[0].split(' ')[1]);
const arr = input[1].split(' ').filter(n => parseInt(n) < num);
const result = arr.join(' ');

console.log(result);