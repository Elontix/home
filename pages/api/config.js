import env from "react-dotenv";

const SERVER = env.PROD || "";
let URL = "http://localhost:5000/elontrix/api/v1/wallets/createAccount";
if (SERVER) URL = "https://api.axlegames.io";

const headers = () => {
  return {
    headers: { Authorization: localStorage.getItem("accessToken") ?? "" },
  };
};

export { URL, headers };
