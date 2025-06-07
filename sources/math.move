module sui_dex::math;

public fun sqrt_u128(x: u128): u64 {
    let mut z = (x + 1) / 2;
    let mut y = x;
    while (z < y) {
        y = z;
        z = (x / z + z) / 2;
    };
    y as u64
}
