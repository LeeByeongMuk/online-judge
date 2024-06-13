const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('');

const map = new Map();
let stack = '';
let count = 3;

function setMap() {
  for (let i = 0; i <= stack.length; i++) map.set(stack[i], count);
  count++;
  stack = '';
}

for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
  stack += String.fromCharCode(i);

  if (
    stack.length === 3 &&
    i !== 'Y'.charCodeAt(0) &&
    i !== 'R'.charCodeAt(0)
  ) {
    setMap();
  } else if (stack.length === 4) {
    setMap()
  }
}

const result = input.map(c => map.get(c)).reduce((acc, cur) => acc + cur, 0);
console.log(result);