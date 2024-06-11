const fs = require('fs');
const input = parseInt(fs.readFileSync(0, 'utf-8').toString().trim());

const result = Array.from({length: input}, (_, i) => i + 1).reduce((acc, cur) => acc + cur, 0);
console.log(result);
