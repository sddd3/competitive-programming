// https://atcoder.jp/contests/abc083/tasks/abc083_b

process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdoup
});

let input = [];
reader.on('line', (line) => input = line.split(' '));

reader.on('close', () => {
    const [N, A, B] = input;

    let total = 0;
    for (let i = 1; i <= N; i++) {
        const array = i.toString().split('').map(value => parseInt(value, 10));
        const sum = array.reduce((pre, cur) => pre + cur, 0);

        // const sum = func(i);
        if (sum >= A && sum <= B) total += i;
    }
    console.log(total);
});

/**
 * reduceを使用しない場合のロジック
 * @param {*} n 計算を行う値
 * @returns 合計値
 */
const func = (n) => {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}