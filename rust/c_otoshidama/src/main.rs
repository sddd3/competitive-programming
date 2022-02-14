// https://atcoder.jp/contests/abc085/tasks/abc085_c
use proconio::input;

fn main() {
    input! {
        n: u64,
        y: u64,
    }
    let mut answer = String::new();
    for a in 0..n + 1 {
        for b in 0..n - a + 1 {
            let c = n - a - b;
            let total = a * 10000 + b * 5000 + c * 1000;
            if total == y {
                answer = a.to_string() + " " + &b.to_string() + " " + &c.to_string();
            }
        }
    }

    if answer == "" {
        println!("-1 -1 -1 ");
    } else {
        println!("{}", answer);
    }
}
