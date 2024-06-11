const fs = require('fs');
const input = parseInt(fs.readFileSync(0, 'utf-8').toString().trim());
const star = '*';
let result = '';

for (let i = 0; i < input; i++) {
  result += star.repeat(i + 1) + '\n';
}

console.log(result);