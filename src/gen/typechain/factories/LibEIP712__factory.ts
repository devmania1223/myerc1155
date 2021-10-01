/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { LibEIP712 } from "../LibEIP712";

export class LibEIP712__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    domain_hash_1155: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibEIP712> {
    return super.deploy(
      domain_hash_1155,
      overrides || {}
    ) as Promise<LibEIP712>;
  }
  getDeployTransaction(
    domain_hash_1155: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(domain_hash_1155, overrides || {});
  }
  attach(address: string): LibEIP712 {
    return super.attach(address) as LibEIP712;
  }
  connect(signer: Signer): LibEIP712__factory {
    return super.connect(signer) as LibEIP712__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibEIP712 {
    return new Contract(address, _abi, signerOrProvider) as LibEIP712;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domain_hash_1155",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b506040516080380380608083398181016040526020811015602f57600080fd5b5051600055603f8060416000396000f3fe6080604052600080fdfea2646970667358221220063f87e2343ff946c2d6b04d43f5f1a37ea1880917297aba5a44c95596dce24364736f6c63430007040033";
