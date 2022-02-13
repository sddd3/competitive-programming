// https://atcoder.jp/contests/abc085/tasks/abc085_b

process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({ input: process.stdin, output: process.stdoup });

const input = [];
reader.on('line', line => input.push(line));

reader.on('close', () => {
    const [N, ...mochis] = input;
    const distinct = Array.from(new Set(mochis));
    console.log(distinct.length);
});