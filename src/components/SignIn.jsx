import { useState } from "react";
import axios from "axios";

const urlApi = "https://todolist-api.hexschool.io";

function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");

  const signIn = async () => {
    try {
      const res = await axios.post(`${urlApi}/users/sign_in`, form);
      setToken(res.data.token);
    } catch (err) {
      setToken("登入失敗: " + err.message);
    }
  };

  function handleInput(e) {
    // console.log(e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <h2>登入</h2>
      <label htmlFor="email">信箱</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleInput}
        placeholder="Email"
      />
      <label htmlFor="password">密碼</label>
      <input
        id="password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleInput}
        placeholder="Password"
      />
      <button onClick={signIn}> Sign In</button>
      <p>Token: {token}</p>
    </>
  );
}

export default SignIn;
