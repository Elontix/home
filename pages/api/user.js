import { gql } from "@apollo/client";

export class UserApi {
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

  static loginUser = () => {
    return gql`
      mutation Users($username: String, $password: String) {
        loginUser(username: $username, password: $password) {
          error
          message
          name
          status
          userId
          username
        }
      }
    `;
  };
}
