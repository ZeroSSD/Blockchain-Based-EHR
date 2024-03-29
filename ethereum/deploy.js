const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledRecord = require('./build/Record.json');

//Link to sepolia network by using Infura and providing seed phrase of metamask wallet
const provider = new HDWalletProvider(
    'desert legal nurse merge profit daring vessel season push away thunder atom',
    'https://sepolia.infura.io/v3/461963104a5f4f7c829a822614f6e4fc',
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    //Deploy contract to rinkeby network
    const result = await new web3.eth.Contract(JSON.parse(compiledRecord.interface))
        .deploy({ data: compiledRecord.bytecode })
        .send({ gas: '10000000', from: accounts[0] });

    //Display the address of the contract 
    console.log('Contract deployed to', result.options.address);

    //Always go to record.js after updating solidity code
};

deploy();