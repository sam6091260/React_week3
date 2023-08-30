import { useState } from "react";
import axios from "axios";

const urlApi = "https://todolist-api.hexschool.io";

function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    nickname: "",
  });
  const [message, setMessage] = useState("");

  const signUp = async () => {
    try {
      const res = await axios.post(`${urlApi}/users/sign_up`, form);
      setMessage("註冊成功. UID: " + res.data.uid);
    } catch (err) {
      setMessage("註冊失敗:" + err.message);
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
      <h2>註冊</h2>
      <label htmlFor="email">信箱</label>
      <input
        id="email"
        value={form.email}
        name="email"
        onChange={handleInput}
        placeholder="Email"
      />
      <label htmlFor="password">密碼</label>
      <input
        id="password"
        value={form.password}
        name="password"
        onChange={handleInput}
        placeholder="Password"
      />
      <label htmlFor="nickname">暱稱</label>
      <input
        id="nickname"
        type="text"
        value={form.nickname}
        name="nickname"
        onChange={handleInput}
        placeholder="Nickname"
      />
      <button onClick={signUp}> Sign Up </button>
      <p>{message}</p>
    </>
  );
}

export default SignUp;
