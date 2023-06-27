import mintTestAbi from "./mintTestAbi.json";
import mintMainnet from "./mintMainnet.json";
import { gql } from "@apollo/client";

export class MintAPi {
  static getMintAbi = (isMainnet) => {
    if (isMainnet) return mintMainnet;
    return mintTestAbi;
  };
  static getAddress = (isMainnet) => {
    if (isMainnet) return "0xE8a1fB9C4427AC095f11B889988Fd07fc86d2B52";
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
