const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

const result = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const index = input[i].charCodeAt(0) - 97;
  if (result[index] === -1) result[index] = i;
}

console.log(result.join(' '));