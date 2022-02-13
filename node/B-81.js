// https://atcoder.jp/contests/abc144/tasks/abc144_b

process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;
reader.on('line', line => input = parseInt(line));
reader.on('close', () => {
    let answer = 'No';
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            const product = i * j;
            if (product === input) answer = 'Yes';
        }
    }
    console.log(answer);
});