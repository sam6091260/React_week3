import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
// import CheckOut from "./components/CheckOut";
import { useEffect, useState } from "react";
import SignOut from "./components/SignOut";
import TodoList from "./components/TodoList";
import { Route, Routes, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import NotFound from "./components/NotFound";

function App() {
  const [token, setToken] = useState("");
  const TodoToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("Todo="))
    ?.split("=")[1];
  useEffect(() => {
    if (TodoToken) {
      setToken(TodoToken);
    }
  }, [token]);

  // const style = ({ isActive }) => {
  //   return {
  //     color: isActive && "#ff6e02",
  //   };
  // };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<SignIn token={token} setToken={setToken} />}
        ></Route>

        <Route path="/logout" element={<SignOut />}></Route>

        <Route
          path="/todo"
          element={<div>{token && <TodoList token={token} />}</div>}
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
