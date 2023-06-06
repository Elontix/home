import { gql } from "@apollo/client";

export class User {
  static registerUser = () => {
    return gql`
      mutation Users(
        $email: String
        $password: String
        $username: String
        $referralCode: String
      ) {
        registerUser(
          email: $email
          password: $password
          username: $username
          referralCode: $referralCode
        ) {
          error
          message
          status
        }
      }
    `;
  };
}
