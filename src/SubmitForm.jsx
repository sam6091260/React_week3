import { useState } from "react";

function SubmitForm() {
  //   const [email, setEmail] = useState("");
  //   const [check, setCheck] = useState(false);
  //   const [checkList, setCheckList] = useState([]);
  const [form, setForm] = useState({
    email: "",
    password: "",
    checkList: [],
  });

  function handleInput(e) {
    console.log(e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheck(e) {
    console.log(e.target.name); // checkList

    const { name, value } = e.target;

    if (e.target.checked) {
      //當有選擇時
      setForm({
        ...form, //原始值
        [name]: [...form[name], value],
        // checkList: [...form.checkList, value ]
      });
    } else {
      // 當沒有選擇時
      setForm({
        ...form,
        [name]: form[name].filter((item) => item !== value),
        // checkList: form.checkList.filter()
      });
    }
  }

  return (
    <>
      <div>
        <label htmlFor="email">Email: {form.email}</label>
        <input type="email" id="email" name="email" onChange={handleInput} />
      </div>
      <div>
        <label htmlFor="password">password: {form.password}</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInput}
        />
      </div>
      <hr />
      {form.checkList.toString()}
      <div>
        <input
          type="checkbox"
          value="卡斯柏"
          name="checkList"
          onChange={handleCheck}
        />
        <input
          type="checkbox"
          value="大王"
          name="checkList"
          onChange={handleCheck}
        />
        <input
          type="checkbox"
          value="阿給"
          name="checkList"
          onChange={handleCheck}
        />
      </div>
    </>
  );
}

export default SubmitForm;
