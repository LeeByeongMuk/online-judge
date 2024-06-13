const fs = require('fs');
const [T, ...arr] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let result = '';

for (let i = 0; i < T; i++) {
  const cur = arr[i];
  const start = cur[0];
  const end = cur[cur.length - 1];

  result += `${start}${end}\n`;
}

console.log(result);