import { useState } from "react";
import axios from "axios";

const urlApi = "https://todolist-api.hexschool.io";

function CheckOut({ token, setToken }) {
  const [message, setMessage] = useState("");

  const checkOut = async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.cookie = `hexschoolTodo=${token}; expires=${tomorrow.toUTCString()}`;
    console.log(
      document.cookie.split("; ").find((row) => row.startsWith("hexschoolTodo"))
    );
    try {
      const res = await axios.get(`${urlApi}/users/checkout`, {
        headers: {
          Authorization: token,
        },
      });
      setMessage("驗證成功 UID: " + res.data.uid);
    } catch (err) {
      setMessage("驗證失敗: " + err.message);
    }
  };
  return (
    <>
      <h2>驗證</h2>
      {/* <label htmlFor="Authorization">Token</label> */}
      <input
        // value={token}
        id="Authorization"
        onChange={(e) => {
          setToken(e.target.value);
        }}
        placeholder="Token"
      />
      <button onClick={checkOut}>Check Out</button>
      <p>{message}</p>
    </>
  );
}

export default CheckOut;
