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
    <div className="container">
      <SignUp />
      <SignIn token={token} setToken={setToken} />
      <CheckOut token={token} setToken={setToken} />
      <SignOut />
      <hr />
      <h2>Todo list</h2>
      {token && <TodoList token={token} />}
    </div>
  );
}

export default App;
