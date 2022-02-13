// https://atcoder.jp/contests/abc086/tasks/abc086_a
process.stdin.resume();
process.stdin.setEncoding('utf8');

let result;
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    const a = line.split(" ")[0];
    const b = line.split(" ")[1];
    const c = a * b;
    result = c % 2 === 0 ? true : false;
});

reader.on('close', () => {
    if (result) {
        console.log(`Even`);
    } else {
        console.log(`Odd`);
    }
});

