module sui_dex::lp;
use sui::balance::{Self, Supply, Balance};

public struct LPCoin<phantom X, phantom Y> has drop {}

public struct Pool<phantom X, phantom Y> has key, store {
    id: UID,
    k_last: u64,
    lp_coin_supply: Supply<LPCoin<X, Y>>,
    balance_x: Balance<X>,
    balance_y: Balance<Y>
}
