// https://atcoder.jp/contests/abc244/tasks/abc244_a
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
reader.on('line', line => input.push(line));
reader.on('close', () => {
    const [N, S] = input;
    const result = S[N - 1];
    console.log(result);
});