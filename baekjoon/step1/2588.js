const fs = require('fs');
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const bArr = b.toString().split('').map(Number).reverse();
const result = bArr.map((c) => c * a);
result.push(a * b);

console.info(result.join('\n'));
