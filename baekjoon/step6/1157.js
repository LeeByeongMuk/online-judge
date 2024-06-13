const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().toUpperCase();

const map = new Map();

for (let i = 0; i < input.length; i++) {
  const str = input[i];

  if (map.has(str)) {
    map.set(str, map.get(str) + 1);
  } else {
    map.set(str, 1);
  }
}

function getResult() {
  const mapArr = [...map].sort((a, b) => b[1] - a[1]);
  if (mapArr.length === 1) {
    return mapArr[0][0];
  } else if (mapArr[0][1] === mapArr[1][1]) {
    return '?'
  } else {
    return mapArr[0][0];
  }
}

const result = getResult();
console.log(result);