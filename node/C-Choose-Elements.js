// https://atcoder.jp/contests/abc245/tasks/abc245_c
process.stdin.resume();
process.stdin.setEncoding('utf8');
const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });

const input = [];
reader.on('line', line => input.push(line));

// 実行時間：72 ms メモリ：30168 KB
reader.on('close', () => {
    let [NK, A, B] = input;
    const [N, K] = NK.split(' ').map(value => Number(value));
    A = A.split(' ').map(value => Number(value));
    B = B.split(' ').map(value => Number(value));
});
