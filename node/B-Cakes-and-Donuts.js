// https://atcoder.jp/contests/abc105/tasks/abc105_b
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
    const N = Number(result.pop());
    // 全検索
    let res = 'No';
    for (let a = 0; a < 26; a++) {
        for (let b = 0; b <= 15; b++) {
            const total = 7 * a + 4 * b;
            if(total === N) {
                res = 'Yes';
            }
        }
    }

    console.log(res);
});