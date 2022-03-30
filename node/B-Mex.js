// https://atcoder.jp/contests/abc245/tasks/abc245_b
process.stdin.resume();
process.stdin.setEncoding('utf8');
const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });

const input = [];
reader.on('line', line => input.push(line));

// 実行時間：72 ms メモリ：30168 KB
reader.on('close', () => {
    const [N, A] = input;
    const split = A.split(' ').map(value => Number(value));
    for (let i = 0; i <= 2000; i++) {
        if (!split.includes(i)) {
            console.log(i);
            break;
        }
    }
});

// 実行時間：261 ms メモリ：32252 KB
// reader.on('close', () => {
//     const [N, A] = input;
//     const split = A.split(' ');
//     const sorted = split.sort((a, b) => Number(a) < Number(b) ? -1 : 1);
//     const set = [...new Set(sorted)];
//     for (let i = 0; i <= 2000; i++) {
//         if (i != set[i]) {
//             console.log(i);
//             break;
//         }
//     }
// });