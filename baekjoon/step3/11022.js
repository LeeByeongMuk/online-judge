const fs = require('fs');
const [_, ...arr] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const result = arr.map((s, i) => {
  const [a, b] = s.split(' ');
  const sum = parseInt(a) + parseInt(b);
  return `Case #${i + 1}: ${a} + ${b} = ${sum}`
});
console.log(result.join('\n'));
