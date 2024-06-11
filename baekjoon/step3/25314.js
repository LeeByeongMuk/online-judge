const fs = require('fs');
const input = parseInt(fs.readFileSync(0, 'utf-8').toString().trim());

const result = Array(input / 4 + 1).join('long ') + 'int';
console.log(result);