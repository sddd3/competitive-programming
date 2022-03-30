// https://atcoder.jp/contests/abc245/tasks/abc245_a
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', line => {
    const [A, B, C, D] = line.split(' ');

    const Takahashi = Number(A) * 60 + Number(B);
    const Aoki = Number(C) * 60 + Number(D);
    const result = Takahashi <= Aoki ? 'Takahashi' : 'Aoki';
    console.log(`${result}`);
});