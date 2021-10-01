/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC1155OperatorMock } from "../ERC1155OperatorMock";

export class ERC1155OperatorMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155OperatorMock> {
    return super.deploy(overrides || {}) as Promise<ERC1155OperatorMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155OperatorMock {
    return super.attach(address) as ERC1155OperatorMock;
  }
  connect(signer: Signer): ERC1155OperatorMock__factory {
    return super.connect(signer) as ERC1155OperatorMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155OperatorMock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155OperatorMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bool",
        name: "_isGasFee",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "metaSafeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isGasFee",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "metaSafeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_isGasFee",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "metaSetApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d18806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063e7e4f05211610050578063e7e4f05214610333578063eb46c45b14610519578063f06978b7146105f957610067565b80637ee7f69b1461006c57806387fd22fc1461024a575b600080fd5b610248600480360360c081101561008257600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101358216926040820135909216918101906080810160608201356401000000008111156100cb57600080fd5b8201836020820111156100dd57600080fd5b803590602001918460208302840111640100000000831117156100ff57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561014f57600080fd5b82018360208201111561016157600080fd5b8035906020019184602083028401116401000000008311171561018357600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156101d357600080fd5b8201836020820111156101e557600080fd5b8035906020019184600183028401116401000000008311171561020757600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106dd945050505050565b005b610248600480360360e081101561026057600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235811692602081013582169260408201359092169160608201359160808101359160a08201351515919081019060e0810160c08201356401000000008111156102be57600080fd5b8201836020820111156102d057600080fd5b803590602001918460018302840111640100000000831117156102f257600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061087a945050505050565b610248600480360360e081101561034957600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235811692602081013582169260408201359092169181019060808101606082013564010000000081111561039257600080fd5b8201836020820111156103a457600080fd5b803590602001918460208302840111640100000000831117156103c657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561041657600080fd5b82018360208201111561042857600080fd5b8035906020019184602083028401116401000000008311171561044a57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295843515159590949093506040810192506020013590506401000000008111156104a457600080fd5b8201836020820111156104b657600080fd5b803590602001918460018302840111640100000000831117156104d857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109a6945050505050565b610248600480360360c081101561052f57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235811692602081013582169260408201359092169160608201359160808101359181019060c0810160a082013564010000000081111561058457600080fd5b82018360208201111561059657600080fd5b803590602001918460018302840111640100000000831117156105b857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b2d945050505050565b610248600480360360c081101561060f57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101358216926040820135909216916060820135151591608081013515159181019060c0810160a082013564010000000081111561066857600080fd5b82018360208201111561067a57600080fd5b8035906020019184600183028401116401000000008311171561069c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c2e945050505050565b8573ffffffffffffffffffffffffffffffffffffffff16632eb2c2d686868686866040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561078d578181015183820152602001610775565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156107cc5781810151838201526020016107b4565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156108085781810151838201526020016107f0565b50505050905090810190601f1680156108355780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b15801561085a57600080fd5b505af115801561086e573d6000803e3d6000fd5b50505050505050505050565b8673ffffffffffffffffffffffffffffffffffffffff1663ce0b514b8787878787876040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001831515815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561093457818101518382015260200161091c565b50505050905090810190601f1680156109615780820380516001836020036101000a031916815260200191505b50975050505050505050600060405180830381600087803b15801561098557600080fd5b505af1158015610999573d6000803e3d6000fd5b5050505050505050505050565b8673ffffffffffffffffffffffffffffffffffffffff1663a3d4926e8787878787876040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001851515815260200180602001848103845288818151815260200191508051906020019060200280838360005b83811015610a5f578181015183820152602001610a47565b50505050905001848103835287818151815260200191508051906020019060200280838360005b83811015610a9e578181015183820152602001610a86565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015610ada578181015183820152602001610ac2565b50505050905090810190601f168015610b075780820380516001836020036101000a031916815260200191505b509950505050505050505050600060405180830381600087803b15801561098557600080fd5b8573ffffffffffffffffffffffffffffffffffffffff1663f242432a86868686866040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610bde578181015183820152602001610bc6565b50505050905090810190601f168015610c0b5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b15801561085a57600080fd5b8573ffffffffffffffffffffffffffffffffffffffff1663f5d4c82086868686866040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184151581526020018315158152602001806020018281038252838181518152602001915080519060200190808383600083811015610bde578181015183820152602001610bc656fea2646970667358221220bdbcac80567895a7aa3160b9abf7b776e200be0b22bb4d8a98e82d5d9e3958b064736f6c63430007040033";
