// https://atcoder.jp/contests/abc087/tasks/abc087_b
use proconio::input;

fn main() {
    input! {
        a: u16,
        b: u16,
        c: u16,
        x: u16
    }
    let mut answer = 0;
    for i in 0..a+1 {
        for j in 0..b+1 {
            for k in 0..c+1 {
                let sum = 500 * i + 100 * j + 50 * k;
                if sum == x {
                    answer += 1;
                }
            }
        }
    }
    println!("{}", answer);
}
