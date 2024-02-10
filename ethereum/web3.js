import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && window.web3 !== 'undefined') {
    //We are in the browser AND metamask is running
    async () => {await window.web3.currentProvider.enable();}
    web3 = new Web3(window.web3.currentProvider);
} else {
    //We are on the server OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://sepolia.infura.io/v3/461963104a5f4f7c829a822614f6e4fc'
    );
    web3 = new Web3(provider);
}

// if (typeof window !== 'undefined') {
//     if(window.web3 !== 'undefined'){
//         const provider = new Web3.providers.HttpProvider(
//             'https://sepolia.infura.io/v3/461963104a5f4f7c829a822614f6e4fc'
//             );
//         web3 = new Web3(provider);
//     } else{
//         web3 = new Web3(window.web3.currentProvider).enable();
//     }
// } else {
//     const provider = new Web3.providers.HttpProvider(
//         'https://sepolia.infura.io/v3/461963104a5f4f7c829a822614f6e4fc'
//         );
//     web3 = new Web3(provider);
// }

export default web3;