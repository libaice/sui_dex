import { SuiGraphQLClient } from '@mysten/sui/graphql';
import { graphql } from '@mysten/sui/graphql/schemas/latest';

const gqlClient = new SuiGraphQLClient({
    url: 'https://sui-testnet.mystenlabs.com/graphql',
});

const chainIdentifierQuery = graphql(`
	query {
		chainIdentifier
	}
`);

async function getChainIdentifier() {
    const result = await gqlClient.query({
        query: chainIdentifierQuery,
    });
    console.log(result)
    return result.data?.chainIdentifier;
}

const getSuinsName = graphql(`
	query getSuiName($address: SuiAddress!) {
		address(address: $address) {
			defaultSuinsName
		}
	}
`);
async function getDefaultSuinsName(address) {
    const result = await gqlClient.query({
        query: getSuinsName,
        variables: {
            address,
        },
    });
    return result.data?.address?.defaultSuinsName;
}


const main = async () => {
    getChainIdentifier();
    const name = await getDefaultSuinsName('0x522f5f637a3c8ae8dd2482c981b12e3eeeb1312a521b1623d16a49d1cf99e2b7')
    console.log(`Default SUINS name for the address: ${name}`);
}

main()