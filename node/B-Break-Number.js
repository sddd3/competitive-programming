// https://atcoder.jp/contests/abc068/tasks/abc068_b
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
reader.on('line', line => input.push(line));
reader.on('close', () => {
    const [N] = input;
    let count = 0;
    let quotient = 0;
    let result = -1;
    let answer = -1;
    for (let i = 1; i <= N; i++) {
        count = 0;
        quotient = i;
        while (quotient % 2 === 0) {
            quotient = quotient / 2;
            count++
        }
        if (result < count) {
            result = count
            answer = i;
        }
    }
    console.log(answer);
});