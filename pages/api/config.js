import env from "react-dotenv";

const SERVER = true || "";
let URL = "http://localhost:5000/";
if (SERVER) URL = "https://api.elontix.io";

const headers = () => {
  return {
    headers: { Authorization: localStorage.getItem("accessToken") ?? "" },
  };
};

export { URL, headers };
