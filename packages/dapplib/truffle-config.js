require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy random night umbrella good praise army giggle'; 
let testAccounts = [
"0xc3913a759d35b52cc6bbecfe35c7c16a94d068bb86e3b9c9d188b1a8375a3dd3",
"0x0b1920c019f85a9c4a7b2d6a7a18695e796b4648ef9472d5f369611f86017703",
"0xfdfc1bec7910df0edfa60baf6a1c78286eb6e51029426331fc8dcf676959d526",
"0x3bce59ecf64b15466f438555e58f6fb10bc6357f6ad29022e909b24bc06739dd",
"0xd79b6f110f08dea081fc2b82ae0ffbfb0b948cfd56b60532a8d29499131fc8cc",
"0xd11bb32eb02f10b917e449bcd46e49852cd5c357f63587ecceda4a822b7f4318",
"0x1fdcf285c268440afa0a35e56d2be591deea58c60c5d28deccc080026890e1a5",
"0xdf9a0e1f2c16caa2647941ffcc54a5a50d082ebd66e12855c9382955483abfcb",
"0x8378b99a2335827e36dc4ef83e6292f9fe989e654be4127898316c4045044451",
"0xe27b23516e8c8672e6845f6178bf2cbc50ffb630002f0b0acfaaa86e15116c7c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

