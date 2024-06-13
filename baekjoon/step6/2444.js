const fs = require('fs');
const input = parseInt(fs.readFileSync(0, 'utf-8').toString().trim());

const result = [];

for (let i = 1; i < input; i++) {
  const blank = ' '.repeat(input - i);
  const star = '*'.repeat(i * 2 - 1);
  const str = blank + star;
  result.push(str);
}

const reverse = [...result].reverse();
result.push('*'.repeat(input * 2 - 1));
result.push(...reverse);

console.log(result.join('\n'))