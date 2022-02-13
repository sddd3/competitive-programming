// https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=0521
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
reader.on('line', line => input.push(line));
reader.on('close', () => {
    const length = input.length;
    for (let i = 0; i < length; i++) {
        const price = Number(input[i]);
        let change = 1000 - price;
        if (price === 0) break;

        /** 500円の枚数 */
        const a = parseInt(change / 500);
        change -= 500 * a;
        /** 100円の枚数 */
        const b = parseInt(change / 100);
        change -= 100 * b;
        /** 50円の枚数 */
        const c = parseInt(change / 50);
        change -= 50 * c;
        /** 10円の枚数 */
        const d = parseInt(change / 10);
        change -= 10 * d;
        /** 5円の枚数 */
        const e = parseInt(change / 5);
        change -= 5 * e;
        /** 1円の枚数 */
        const f = parseInt(change / 1);
        change -= 1 * f;
        console.log(a + b + c + d + e + f);
    }
});