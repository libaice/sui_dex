#[test_only]
module sui_dex::math_tests;

use std::debug;
use sui_dex::math;

#[test]
fun test_math() {
    let result = math::sqrt_u128(100);
    debug::print(&result);
}