const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

const result = input.charCodeAt(0);

console.log(result);