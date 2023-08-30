import { useState } from "react";
import axios from "axios";

function SignOut() {
  const urlApi = "https://todolist-api.hexschool.io";

  const [token, setToken] = useState("");

  const signOut = async () => {
    try {
      const res = await axios.post(
        `${urlApi}/users/sign_out`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      setToken("登出錯誤: " + err.message);
    }
  };

  return (
    <>
      <h2>登出</h2>
      <input
        value={token}
        onChange={(e) => {
          setToken(e.target.value);
        }}
        placeholder="Token"
      />
      <button onClick={signOut}>Sign Out</button>
    </>
  );
}

export default SignOut;
