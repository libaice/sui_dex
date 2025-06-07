module sui_dex::pool;

use sui::bag::{Self, Bag};
use sui::coin::{Self, Coin, TreasuryCap, split, value, mint, burn};
use sui::object::{Self, UID};
use sui::transfer;
use sui::tx_context::TxContext;
use sui_dex::events;
use sui_dex::lp;
use sui_dex::math;

public struct Storage has key {
    id: UID,
    pools: Bag,
    fee_to: address,
}

//  ### CREATE POOL

/**public fun create_pool<X, Y>(
    storage: &mut Storage,
    coin_x: Coin<X>,
    coin_y: Coin<Y>,
    ctx: &mut TxContext,
): Coin<LPCoin<X, Y>> {
    assert!(utils::are_coins_sorted<X, Y>(), ERROR_UNSORTED_COINS);

    // Sort the coins and get their values
    let coin_x_value = coin::value(&coin_x);
    let coin_y_value = coin::value(&coin_y);

    assert!(coin_x_value != 0 && coin_y_value != 0, ERROR_CREATE_PAIR_ZERO_VALUE);
    assert!(
        MAX_POOL_COIN_AMOUNT > coin_x_value && MAX_POOL_COIN_AMOUNT > coin_y_value,
        ERROR_POOL_IS_FULL,
    );

    let lp_coin_name = utils::get_lp_coin_name<X, Y>();

    assert!(!bag::contains(&storage.pools, lp_coin_name), ERROR_POOL_EXISTS);

    let k = coin_x_value * coin_y_value;
    let shares = math::sqrt(k);

    let supply = balance::create_supply(LPCoin<X, Y> {});
    let min_liquidity_balance = balance::increase_supply(&mut supply, MINIMUM_LIQUIDITY);
    let sender_balance = balance::increase_supply(&mut supply, shares);

    transfer::transfer(coin::from_balance(min_liquidity_balance, ctx), ZERO_ACCOUNT);

    let pool_id = object::new(ctx);

    event::emit(PoolCreated<Pool<X, Y>> {
        id: object::uid_to_inner(&pool_id),
        shares,
        value_x: coin_x_value,
        value_y: coin_y_value,
        sender: tx_context::sender(ctx),
    });

    bag::add(
        &mut storage.pools,
        lp_coin_name,
        Pool {
            id: pool_id,
            k_last: k,
            lp_coin_supply: supply,
            balance_x: coin::into_balance<X>(coin_x),
            balance_y: coin::into_balance<Y>(coin_y),
        },
    );

    coin::from_balance(sender_balance, ctx)
}
*/


//  SWAP COIN
/**
    public fun swap<X, Y>(
      storage: &mut Storage,
      coin_x: Coin<X>,
      coin_y: Coin<Y>,
      coin_out_min_value: u64,
      ctx: &mut TxContext
      ): (Coin<X>, Coin<Y>) {
      assert!(utils::are_coins_sorted<X, Y>(), ERROR_UNSORTED_COINS);

       let is_coin_x_value_zero = coin::value(&coin_x) == 0;

        assert!(!is_coin_x_value_zero || coin::value(&coin_y) != 0, ERROR_ZERO_VALUE_SWAP);

        let pool = borrow_mut_pool<X, Y>(storage);

        if (is_coin_x_value_zero) {
          coin::destroy_zero(coin_x);
          let coin_x = swap_token_y(pool, coin_y, coin_out_min_value, ctx);
           (coin_x, coin::zero<Y>(ctx)) 
        } else {
          coin::destroy_zero(coin_y);
          let coin_y = swap_token_x(pool, coin_x, coin_out_min_value, ctx);
          (coin::zero<X>(ctx), coin_y) 
        }
      }

*/

// ADD LIQUIDITY

/**
        public fun add_liquidity<X, Y>(   
      storage: &mut Storage,
      coin_x: Coin<X>,
      coin_y: Coin<Y>,
      ctx: &mut TxContext
      ): Coin<LPCoin<X, Y>> {
        assert!(utils::are_coins_sorted<X, Y>(), ERROR_UNSORTED_COINS);

        let coin_x_value = coin::value(&coin_x);
        let coin_y_value = coin::value(&coin_y);
        
        let fee_to = storage.fee_to;
        let pool = borrow_mut_pool<X, Y>(storage);

        let is_fee_on = mint_fee(pool, fee_to, ctx);

        assert!(coin_x_value != 0 && coin_x_value != 0, ERROR_ADD_LIQUIDITY_ZERO_AMOUNT);

        let (token_x_reserve, token_y_reserve, supply) = get_amounts(pool);

        let share_to_mint = math::min(
          (coin_x_value * supply) / token_x_reserve,
          (coin_y_value * supply) / token_y_reserve
        );

        let new_reserve_x = balance::join(&mut pool.balance_x, coin::into_balance(coin_x));
        let new_reserve_y = balance::join(&mut pool.balance_y, coin::into_balance(coin_y));

        assert!(MAX_POOL_COIN_AMOUNT >= new_reserve_x, ERROR_POOL_IS_FULL);
        assert!(MAX_POOL_COIN_AMOUNT >= new_reserve_y, ERROR_POOL_IS_FULL);

        event::emit(
          AddLiquidity<Pool<X, Y>> {
          id: object:: uid_to_inner(&pool.id), 
          sender: tx_context::sender(ctx), 
          coin_x_amount: coin_x_value, 
          coin_y_amount: coin_y_value,
          shares_minted: share_to_mint
          }
        );

        if (is_fee_on) pool.k_last = new_reserve_x * new_reserve_y;

        coin::from_balance(balance::increase_supply(&mut pool.lp_coin_supply, share_to_mint), ctx)
      }
*/


//  REMOVE LIQUIDITY
/**

  public fun remove_liquidity<X, Y>(   
      storage: &mut Storage,
      lp_coin: Coin<LPCoin<X, Y>>,
      ctx: &mut TxContext
      ): (Coin<X>, Coin<Y>) {
        assert!(utils::are_coins_sorted<X, Y>(), ERROR_UNSORTED_COINS);
        let lp_coin_value = coin::value(&lp_coin);

        assert!(lp_coin_value != 0, ERROR_REMOVE_LIQUIDITY_ZERO_AMOUNT);

        let fee_to = storage.fee_to;
        let pool = borrow_mut_pool<X, Y>(storage);

        let is_fee_on = mint_fee(pool, fee_to, ctx);

        let (token_x_reserve, token_y_reserve, lp_coin_supply) = get_amounts(pool);

        let coin_x_removed = (lp_coin_value * token_x_reserve) / lp_coin_supply;
        let coin_y_removed = (lp_coin_value * token_y_reserve) / lp_coin_supply;

        balance::decrease_supply(&mut pool.lp_coin_supply, coin::into_balance(lp_coin));

        event::emit(
          RemoveLiquidity<Pool<X, Y>> {
          id: object:: uid_to_inner(&pool.id), 
          sender: tx_context::sender(ctx), 
          coin_x_out: coin_x_removed,
          coin_y_out: coin_y_removed,
          shares_destroyed: lp_coin_value
          }
        );

        if (is_fee_on) pool.k_last = (token_x_reserve - coin_x_removed) * (token_y_reserve - coin_y_removed);

        (
          coin::take(&mut pool.balance_x, coin_x_removed, ctx),
          coin::take(&mut pool.balance_y, coin_y_removed, ctx),
        )
      }

*/