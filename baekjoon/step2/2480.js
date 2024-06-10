const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

function solution() {
  const arr = Array.from({length: 6}, () => [0, 0]);

  input.forEach(n => {
    arr[n - 1][0] = n;
    arr[n - 1][1]++;
  });

  const [r] = arr.filter((a) => a[1] > 0).sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return b[1] - a[1];
    }
  });

  const [a, b] = r;

  switch (b) {
    case 3: return 10000 + a * 1000;
    case 2: return 1000 + a * 100;
    default: return a * 100;
  }
}

console.log(solution());