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
      <label htmlFor="email" className="fw-bold fs-5">
        信箱
      </label>
      <input
        className="form-control"
        id="email"
        value={form.email}
        name="email"
        onChange={handleInput}
        placeholder="請輸入信箱"
      />
      <label htmlFor="password" className="fw-bold fs-5">
        密碼
      </label>
      <input
        className="form-control"
        id="password"
        value={form.password}
        name="password"
        onChange={handleInput}
        placeholder="請輸入密碼"
      />
      <label htmlFor="nickname" className="fw-bold fs-5">
        暱稱
      </label>
      <input
        className="form-control"
        id="nickname"
        type="text"
        value={form.nickname}
        name="nickname"
        onChange={handleInput}
        placeholder="請輸入暱稱"
      />
      <button onClick={signUp} className="fw-bold btn btn-primary mt-4">
        {" "}
        Sign Up{" "}
      </button>
      <p>{message}</p>
    </>
  );
}

export default SignUp;
