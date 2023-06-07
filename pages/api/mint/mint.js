import mintTestAbi from "./mintTestAbi.json";
import { gql } from "@apollo/client";

export class MintAPi {
  static getMintAbi = (isMainnet) => {
    if (isMainnet) return null;
    return mintTestAbi;
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
