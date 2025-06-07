## SuiSwap — A Uniswap-AMM-style DEX on Sui



SuiSwap is a decentralized exchange (DEX) built using the Sui Move programming language. It enables users to swap tokens and provide liquidity in a fully on-chain, permissionless, and composable environment.

---



### ✨ **Features**

>•	Automated Market Maker (AMM) model based on Uniswap v2 (constant product formula x * y = k)
> •	Support for creating and managing custom liquidity pools
	•	Liquidity provision and withdrawal with LP token minting
	•	Token swaps with slippage and fee support
	•	Event emissions for front-end tracking
	•	Fully object-oriented design aligned with Sui’s architecture



---



### 🧱 **Architecture Overview**

> • `LiquidityPool.move` — Defines and manages each token pair pool and its reserves.
> • `Swap.move` — Executes swaps using the AMM formula with fee logic.
> • `Math.move` — Utility module for computing prices, ratios, and LP shares.
> • `Events.move` — Emits structured events (e.g., AddLiquidity, Swap, RemoveLiquidity).



Each LiquidityPool is stored as a separate on-chain Sui object, giving full composability and traceability.

---



### 🚀 **Getting Started**

**Prerequisites**

> [Sui Client Cli](https://docs.sui.io/references/cli)
> 
> Node.js & Git (for front-end dApp integration )



**Build & Test**

```shell
# Clone the repo
git clone https://github.com/libaice/sui_dex.git
cd sui_dex

# Build the modules
sui move build

# Run unit tests
sui move test
```



**Deploy to Devnet**

You can publish to Sui Devnet using:

```shell
sui client publish --gas-budget 50000000
```

Make sure to set up your wallet and request some test SUI tokens via the Sui Faucet.





### **📘 Example Flow**

1. create_pool(token_x, token_y)

   → Initializes a new trading pair

   

2. add_liquidity(amount_x, amount_y)

   → Adds reserves and mints LP tokens to the user

   

3. swap_exact_x_for_y(dx)

   → Swaps input token X for token Y using the pool

   

4. remove_liquidity(lp_amount)

   → Burns LP tokens and returns reserves



### 🧪 Testing Strategy



- **Unit tests cover:**

  - Initial pool creation
  - LP token issuance and redemption
  - Swap correctness under slippage and rounding

  

- Future plans: Fuzz testing for pool invariants (e.g., k constant check)



### **📚 Resources**

- [Sui Move Book](https://move-book.com/)
- [Uniswap Whitepaper](https://app.uniswap.org/whitepaper.pdf)
- [OpenMove (Sui stdlib)](https://github.com/MystenLabs/sui/tree/main/crates/sui-framework)



### **🧑‍💻 Contributing**

Contributions are welcome! Please open an issue or pull request for suggestions, bug fixes, or improvements.



### **🛡️ License**

MIT License.

Copyright © 2025.
