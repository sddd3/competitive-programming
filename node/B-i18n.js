// https://atcoder.jp/contests/abc069/tasks/abc069_b
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';
reader.on('line', line => input = line);
reader.on('close', () => {
    const length = input.length - 2;
    const first = input[0];
    const end = input[input.length - 1];
    console.log(`${first}${length}${end}`);
});