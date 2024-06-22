const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const N = Number(input.shift());
const result = [];

for (let i = 0; i < N; i++) {
  const word = input[i];
  const alphabet = new Set();
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (alphabet.has(word[j])) {
      isGroupWord = false;
      break;
    }

    if (word[j] !== word[j + 1]) {
      alphabet.add(word[j]);
    }
  }

  if (isGroupWord) {
    result.push(word);
  }
}

console.log(result.length);