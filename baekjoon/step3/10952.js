const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map((d) => {
  const [a, b] = d.split(' ');
  return parseInt(a) + parseInt(b);
});

input.pop();
console.log(input.join('\n'));

