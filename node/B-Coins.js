// https://atcoder.jp/contests/abc087/tasks/abc087_b
process.stdin.resume();
process.stdin.setEncoding('utf8');

const result = [];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    result.push(line);
});

reader.on('close', () => {
    const X = Number(result.pop());
    const C = Number(result.pop());
    const B = Number(result.pop());
    const A = Number(result.pop());

    // 全検索
    let res = 0;
    let total = 0;
    // 500円のループ
    for (let a = 0; a <= A; a++) {
        // 100円のループ
        for (let b = 0; b <= B; b++) {
            // 50円のループ
            for (let c = 0; c <= C; c++) {
                total = 500 * a + 100 * b + 50 * c;
                if (total === X) {
                    res++;
                }
            }
        }
    }

    console.log(res);
});

