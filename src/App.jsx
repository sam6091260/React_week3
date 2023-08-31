import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CheckOut from "./components/CheckOut";
import { useEffect, useState } from "react";
import SignOut from "./components/SignOut";
import TodoList from "./components/TodoList";

function App() {
  const [token, setToken] = useState("");
  const TodoToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("hexschoolTodo="))
    ?.split("=")[1];
  useEffect(() => {
    if (TodoToken) {
      setToken(TodoToken);
    }
  }, []);
  return (
    <div className="container bg-yellow row">
      <div className="col-5">
        {" "}
        <SignUp />
      </div>
      <div className="col-5">
        {" "}
        <SignIn token={token} setToken={setToken} />
      </div>
      <div className="col-5">
        {" "}
        <CheckOut token={token} setToken={setToken} />
      </div>
      <div className="col-5">
        <SignOut />
      </div>

      <hr />

      <h2>Todo list</h2>
      {token && <TodoList token={token} />}
    </div>
  );
}

export default App;
