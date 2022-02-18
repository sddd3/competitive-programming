// https://atcoder.jp/contests/abc238/tasks/abc238_a
use proconio::input;

fn main() {
    input! {
        n: u64
    }

    if 5 <= n || n == 1 {
        println!("Yes");
    } else {
        println!("No");
    }
}
