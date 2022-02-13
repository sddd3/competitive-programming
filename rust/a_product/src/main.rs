use proconio::input;

fn main() {
    input! {
        a: i32,
        b: i32,
    }
    println!(" a {:p}", &a);
    println!(" b {:p}", &b);
    println!(" a + b {}", a + b);
}
