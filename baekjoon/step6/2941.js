const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

const alphabet = new Set(['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']);
const result = [];

for (let i = 0; i < input.length; i++) {
  if (alphabet.has(input[i] + input[i + 1] + input[i + 2])) {
    result.push(input[i] + input[i + 1] + input[i + 2]);
    i += 2;
  } else if (alphabet.has(input[i] + input[i + 1])) {
    result.push(input[i] + input[i + 1]);
    i++;
  } else {
    result.push(input[i]);
  }
}

console.log(result.length);