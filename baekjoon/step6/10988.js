const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

const reverseStr = input.split('').reverse().join('');
const result = input === reverseStr ? 1 : 0;
console.log(result);
