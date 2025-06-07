import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { verifyTransactionSignature } from '@mysten/sui/verify';
import { Transaction } from '@mysten/sui/transactions';
import { fromHex } from '@mysten/sui/utils';



const tx = new Transaction();
const [coin] = tx.splitCoins(tx.gas, [100]);
const recipientAddress = '0x522f5f637a3c8ae8dd2482c981b12e3eeeb1312a521b1623d16a49d1cf99e2b7'

tx.transferObjects([coin], recipientAddress);

// Sign and send the transaction

// const { signature } = await tx.signAndExecuteTransaction({ signer: keypair, transaction: tx });
// console.log('Transaction sent with signature:', signature);

const keypair = new Ed25519Keypair();
console.log(keypair.getPublicKey().toSuiAddress());