#[test_only]
module sui_dex::sui_dex_tests;

use std::debug;
use std::string;
use sui::object;
use sui::tx_context;
use sui_dex::example;

const ENotImplemented: u64 = 0;

#[test]
fun test_todolist_new_and_length() {
    let mut ctx = tx_context::dummy();
    let mut list = example::new(&mut ctx);
    debug::print(&string::utf8(b"This is a test string."));
    debug::print(&list.length());
    example::delete(list);
}

#[test]
fun test_todolist_add() {
    let mut ctx = tx_context::dummy();
    let mut list = example::new(&mut ctx);
    example::add(&mut list, string::utf8(b"item1"));
    example::add(&mut list, string::utf8(b"item2"));
    debug::print(&string::utf8(b"Test Add 2 items into the list."));
    debug::print(&list.length());
    example::delete(list);
}

#[test]
fun test_todolist_remove() {
    let mut ctx = tx_context::dummy();
    let mut list = example::new(&mut ctx);
    example::add(&mut list, string::utf8(b"item1"));
    example::add(&mut list, string::utf8(b"item2"));
    debug::print(&string::utf8(b"Test Delete 1 items into the list."));
    debug::print(&list.length());

    let removed = example::remove(&mut list, 0);
    debug::print(&list.length());
    example::delete(list);
}

#[test]
fun test_todolist_delete() {
    let mut ctx = tx_context::dummy();
    let list = example::new(&mut ctx);
    example::delete(list);
}

#[test, expected_failure(abort_code = ::sui_dex::sui_dex_tests::ENotImplemented)]
fun test_sui_dex_fail() {
    abort ENotImplemented
}
