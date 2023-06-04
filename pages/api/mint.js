import { gql } from "@apollo/client";

export class MintAPi {
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
