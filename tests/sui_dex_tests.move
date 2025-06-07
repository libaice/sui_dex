#[test_only]
module sui_dex::sui_dex_tests;

// uncomment this line to import the module
use sui_dex::example;

use std::debug;

const ENotImplemented: u64 = 0;

#[test]
fun test_sui_dex() {
    
    let result = example::hello_world();
    debug::print(&result);
    // assert(result == b"Hello, World!".to_string(), 0);
}

#[test, expected_failure(abort_code = ::sui_dex::sui_dex_tests::ENotImplemented)]
fun test_sui_dex_fail() {
    abort ENotImplemented
}
