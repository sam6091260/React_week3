import axios from "axios";
import { useState } from "react";

const host = "https://todolist-api.hexschool.io";

function Todo() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const [token, setToken] = useState("");

  function handleInput(e) {
    console.log(e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // 註冊
  const signUp = () => {
    console.log("signUp");
    console.log(form);

    (async () => {
      //伺服器 + 路由
      console.log(`${host}/users/sign_up`);
      // axios [method] , api path, data
      const res = await axios.post(`${host}/users/sign_up`, form);

      console.log(res);
    })();
  };

  // 登入
  const signIn = () => {
    console.log("signIn");
    console.log(form);

    (async () => {
      //伺服器 + 路由
      console.log(`${host}/users/sign_in`);
      // axios [method] , api path, data
      const res = await axios.post(`${host}/users/sign_in`, form);

      console.log(res);
    })();
  };

  // 驗證

  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiItTmN6eTM0MmJaY0lya3o2bEluSyIsIm5pY2tuYW1lIjoic3NzaGFuZSIsImlhdCI6MTY5MzI5MDM4OCwiZXhwIjoxNjkzNTQ5NTg4fQ.VeJcinRsZmfU43GaNXEn5WnxhRpaxzdTKBFvOxqFli8"

  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiItTmN6ckFsMjQ5STRnMHR5WUhZTyIsIm5pY2tuYW1lIjoic2hhbmUiLCJpYXQiOjE2OTMyODkwOTMsImV4cCI6MTY5MzU0ODI5M30.OYAgMHr8StKhfzzfhMDVBb1BHeUPm55uYYHTZbuZ_KY"
  const checkout = () => {
    console.log("checkout");
    console.log(token);

    (async () => {
      //伺服器 + 路由
      console.log(`${host}/users/checkout`);
      // axios [method] , api path, data
      const res = await axios.get(`${host}/users/checkout`, {
        headers: {
          Authorization: token,
        },
      });
      // .then((res) => {
      console.log(res);
      // });
    })();
  };

  return (
    <>
      <h2>註冊</h2>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" onChange={handleInput} />
      </div>
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInput}
        />
      </div>
      <div>
        <label htmlFor="nickname">nickname: </label>
        <input
          type="nickname"
          id="nickname"
          name="nickname"
          onChange={handleInput}
        />
      </div>
      <button
        onClick={() => {
          signUp();
        }}
      >
        註冊
      </button>
      <hr />
      <h2>登入</h2>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" onChange={handleInput} />
      </div>
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInput}
        />
      </div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        登入
      </button>
      <hr />
      <h2>驗證</h2>
      <div>
        <label htmlFor="token">Token: {token}</label>
        <input
          type="email"
          id="token"
          name="email"
          onChange={(e) => {
            setToken(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          checkout();
        }}
      >
        驗證
      </button>
    </>
  );
}

export default Todo;
