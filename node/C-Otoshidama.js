// https://atcoder.jp/contests/abc085/tasks/abc085_c
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
reader.on('line', line => input = line.split(' ').map(value => parseInt(value)));
reader.on('close', () => {
    const [N, Y] = input;
    let res = '';
    for (let a = 0; a <= N; a++) {
        for (let b = 0; a + b <= N; b++) {
            const c = N - a - b;
            const total = a * 10000 + b * 5000 + c * 1000;
            if (total === Y) {
                res = `${a} ${b} ${c}`;
            }
        }
    }

    const result = res ? res : '-1 -1 -1';
    console.log(result);
});