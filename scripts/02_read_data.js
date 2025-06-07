import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { getFaucetHost, requestSuiFromFaucetV2 } from '@mysten/sui/faucet';
import { MIST_PER_SUI, SUI_DECIMALS } from '@mysten/sui/utils';

const rpcUrl = getFullnodeUrl('mainnet');
const MY_ADDRESS = '0xea9689a9a6dbf59095fa72f2571718eae34f25e8cb01a56954d912c584843b06';
const suiClient = new SuiClient({ url: getFullnodeUrl('mainnet') });

const main = async () => {
    const coinData = await suiClient.getCoins({
        owner: MY_ADDRESS
    });
    const allCoinsData = await suiClient.getAllCoins(
        { owner: MY_ADDRESS }
    )

    console.log("rpc version ", (await suiClient.getRpcApiVersion()));
    console.log("Coin Data:", coinData);
    console.log("All Coins Data:", allCoinsData);

}

main();