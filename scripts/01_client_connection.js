import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { getFaucetHost, requestSuiFromFaucetV2 } from '@mysten/sui/faucet';
import { MIST_PER_SUI, SUI_DECIMALS } from '@mysten/sui/utils';

const MY_ADDRESS = '0xea9689a9a6dbf59095fa72f2571718eae34f25e8cb01a56954d912c584843b06';

const suiClient = new SuiClient({ url: getFullnodeUrl('testnet') });


const main = async () => {
    // 1. query balance
    const balanceObject = (await suiClient.getBalance({ owner: MY_ADDRESS }));
    const balanceAmount = (balanceObject.totalBalance) / 1000000000;
    console.log(`Balance of my address ${MY_ADDRESS}: ${balanceAmount} SUI`);


    // 2. request SUI from faucet
    await requestSuiFromFaucetV2({
        host: getFaucetHost('testnet'),
        recipient: MY_ADDRESS,
    });

    const suiAfterObject = await suiClient.getBalance({
        owner: MY_ADDRESS,
    });

    const suiAfterAmount = suiAfterObject.totalBalance / 1000000000;
    console.log(`Balance after requesting SUI: ${suiAfterAmount} SUI`);

}

main();

