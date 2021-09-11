require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remind hour install casual forget security'; 
let testAccounts = [
"0xabdafef76f30ffac024b383a10ac82cf6f3617d40a3dd1454b519f9e0e357a0c",
"0x71037a68d12e67821ffa802168e4fbaa402ba6f1c038200539942159f5bac7c8",
"0xc9fc58b6dee02b321fcdcf58d4f4ea6038e62aaeaacd6ea7417e74685477e998",
"0x2df2238f7f0f5605c06a110fb4b43ca69a7b7190353b87f76cd62c925426439c",
"0xb15d88e103614e585c591961e7bd2bfdfd926d1222ff5bf26f1f07fa27e76bda",
"0x8474563c0aafe6b003fe6a89c256088159241ca0da8b4256523b8846ac6529c8",
"0x966b94b2522091abc8fabcccdbdf20d40696ec0ae0f62924da4e3e446a64f252",
"0x5b38f9039046bed68e108db64c3c74cb2f627410879cea1d09d601140063fcbb",
"0xc396e0badbb849971147361d2811bb0448bcec74c77e638c9e6a4e494246e452",
"0xe55eb8422e958deac6d856c43f79ca59f03f0b3521f1f70a2c65a7200880c57b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


