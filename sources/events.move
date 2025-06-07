module sui_dex::events;

use sui::event;

public struct PoolCreated<phantom P> has copy, drop {
    id: ID,
    shares: u64,
    value_x: u64,
    value_y: u64,
    sender: address,
}

public struct SwapTokenX<phantom X, phantom Y> has copy, drop {
    id: ID,
    sender: address,
    coin_x_in: u64,
    coin_y_out: u64,
}

public struct SwapTokenY<phantom X, phantom Y> has copy, drop {
    id: ID,
    sender: address,
    coin_y_in: u64,
    coin_x_out: u64,
}

public struct AddLiquidity<phantom P> has copy, drop {
    id: ID,
    sender: address,
    coin_x_amount: u64,
    coin_y_amount: u64,
    shares_minted: u64,
}

public struct RemoveLiquidity<phantom P> has copy, drop {
    id: ID,
    sender: address,
    coin_x_out: u64,
    coin_y_out: u64,
    shares_destroyed: u64,
}

// --------------------------------
public struct AddLiquidityEvent<phantom X, phantom Y> has copy, drop, store {
    amount_x: u64,
    amount_y: u64,
    lp_minted: u64,
}

public struct RemoveLiquidityEvent<phantom X, phantom Y> has copy, drop, store {
    lp_burned: u64,
    amount_x: u64,
    amount_y: u64,
}

public struct SwapEvent<phantom X, phantom Y> has copy, drop, store {
    input_amount: u64,
    output_amount: u64,
}

public fun emit_add_liquidity<X, Y>(amount_x: u64, amount_y: u64, lp_minted: u64) {
    event::emit(AddLiquidityEvent<X, Y> { amount_x, amount_y, lp_minted })
}

public fun emit_remove_liquidity<X, Y>(lp: u64, ax: u64, ay: u64) {
    event::emit(RemoveLiquidityEvent<X, Y> { lp_burned: lp, amount_x: ax, amount_y: ay })
}

public fun emit_swap<X, Y>(input: u64, output: u64) {
    event::emit(SwapEvent<X, Y> { input_amount: input, output_amount: output })
}
