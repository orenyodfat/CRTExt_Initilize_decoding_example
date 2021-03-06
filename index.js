const abiDecoder = require('abi-decoder'); // NodeJS
const  Web3 = require('web3'); // NodeJS
const encodedData = "0xc595b5500000000000000000000000005cbcb1150dcd8534de24d248f5879f309697f959000000000000000000000000fc0cfdbcbbd39f5f2abfea909f75227ca994c76c00000000000000000000000000000000000000000000000000000000000000320000000000000000000000000000000000000000000000000000000000278d000000000000000000000000000000000000000000000000000000000000054600000000000000000000000000000000000000000000000000000000000001518000000000000000000000000000000000000000000000000000000000000004b0000000000000000000000000000000000000000000000000000000000002a300000000000000000000000000000000000000000000000000000000000000003200000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000096000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000005ef661d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000952b6e2cae6787c811ca1a2b17642a2e6925be300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000150000000000000000000000000000000000000000000000000000000000000280000000000000000000000000000000000000000000000000000000000000000b436f6d7065746974696f6e000000000000000000000000000000000000000000";

const contributionRewardInitilizeABI =  [{
      "constant": false,
      "inputs": [
        {
          "internalType": "contract Avatar",
          "name": "_avatar",
          "type": "address"
        },
        {
          "internalType": "contract IntVoteInterface",
          "name": "_votingMachine",
          "type": "address"
        },
        {
          "internalType": "uint256[11]",
          "name": "_votingParams",
          "type": "uint256[11]"
        },
        {
          "internalType": "address",
          "name": "_voteOnBehalf",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_voteParamsHash",
          "type": "bytes32"
        },
        {
          "internalType": "contract DAOFactory",
          "name": "_daoFactory",
          "type": "address"
        },
        {
          "internalType": "uint64[3]",
          "name": "_packageVersion",
          "type": "uint64[3]"
        },
        {
          "internalType": "string",
          "name": "_rewarderName",
          "type": "string"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }];
var encodedDataForWeb3 =  '0x' + encodedData.substring(10);
let web3 = new Web3();
var  decodedData = web3.eth.abi.decodeParameters(["address","address","uint256[11]","address","bytes32","address","uint64[3]","string"],encodedDataForWeb3);
console.log("with web3 rewarder is " , decodedData[7]);
abiDecoder.addABI(contributionRewardInitilizeABI);
decodedData = abiDecoder.decodeMethod(encodedData);
console.log("with abiDecoder rewarder is",decodedData.params[7].value);
