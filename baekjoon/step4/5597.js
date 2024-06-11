const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

const arr = Array.from({length: 30}, (_, i) => i + 1).filter(i => !input.includes(i)).sort((a, b) => a - b);
const result = arr.join('\n');
console.log(result);