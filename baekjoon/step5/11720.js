const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const result = input[1].split('').reduce((acc, cur) => acc + parseInt(cur), 0);

console.log(result);