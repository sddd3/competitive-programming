// https://atcoder.jp/contests/abc085/tasks/abc085_c
use proconio::input;

fn main() {
    input! {
        n: usize,
        s: String,
    }

    let result = s.chars().nth(n-1).unwrap();
    println!("{}", result);
}
