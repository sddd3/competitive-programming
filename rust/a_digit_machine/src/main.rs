// https://atcoder.jp/contests/abc241/tasks/abc241_a
use proconio::input;

fn main() {
    input! {
        d: [usize; 10],
    }
    let mut num = d[0];
    num = d[num];
    num = d[num];
    println!("{}", num);
}
