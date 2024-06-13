const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

const result = input.length === 0 ? 0 : input.split(' ').length;
console.log(result);