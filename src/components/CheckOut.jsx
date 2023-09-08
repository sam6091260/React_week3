import { useState } from "react";
import axios from "axios";

const { VITE_APP_HOST } = import.meta.env;

function CheckOut({ token, setToken }) {
  const [message, setMessage] = useState("");

  const checkOut = async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.cookie = `Todo=${token}; expires=${tomorrow.toUTCString()}`;
    console.log(
      document.cookie.split("; ").find((row) => row.startsWith("Todo"))
    );
    try {
      const res = await axios.get(`${VITE_APP_HOST}/users/checkout`, {
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
    <div className="mt-5 col-5">
      <h2 className="fw-bold">驗證</h2>
      {/* <label htmlFor="Authorization">Token</label> */}
      <input
        // value={token}
        className="form-control mt-1"
        id="Authorization"
        onChange={(e) => {
          setToken(e.target.value);
        }}
        placeholder="Token"
      />
      <button
        type="button"
        onClick={checkOut}
        className="fw-bold btn btn-dark mt-4"
      >
        Check Out
      </button>
      <p>{message}</p>
    </div>
  );
}

export default CheckOut;
