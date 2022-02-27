// https://atcoder.jp/contests/abc240/tasks/abc240_b
use proconio::input;

fn main() {
    input! {
        n: usize,
        mut a: [usize; n],
    }
    a.sort();
    a.dedup();
    println!("{}", a.len());
}
