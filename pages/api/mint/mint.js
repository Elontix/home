import mintTestAbi from "./mintTestAbi.json";
import { gql } from "@apollo/client";

export class MintAPi {
  static getMintAbi = (isMainnet) => {
    if (isMainnet) return null;
    return mintTestAbi;
  };

  static getAddress = (isMainnet) => {
    if (isMainnet) return null;
    return "0x64c477Af9ECd24D5CF269a075754D3a0EffA3979";
  };

  static createAccountGQL = () => {
    return gql`
      mutation Users($address: String, $ipAddress: String) {
        createWalletAccount(address: $address, ipAddress: $ipAddress) {
          status
        }
      }
    `;
  };
}
