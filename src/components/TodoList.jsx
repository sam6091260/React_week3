import { useEffect, useState } from "react";
import axios from "axios";

const urlApi = "https://todolist-api.hexschool.io";

const TodoList = ({ token }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [todoEdit, setTodoEdit] = useState({});

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const res = await axios.get(`${urlApi}/todos`, {
      headers: {
        Authorization: token,
      },
    });
    setTodos(res.data.data);
  };

  const addTodo = async () => {
    if (!newTodo) return;
    const todo = {
      content: newTodo,
    };
    await axios.post(`${urlApi}/todos`, todo, {
      headers: {
        Authorization: token,
      },
    });
    setNewTodo("");
    getTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${urlApi}/todos/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    getTodos();
  };

  const updateTodo = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.content = todoEdit[id];
    await axios.put(`${urlApi}/todos/${id}`, todo, {
      headers: {
        Authorization: token,
      },
    });
    getTodos();
    setTodoEdit({
      ...todoEdit,
      [id]: "",
    });
  };

  const toggleStatus = async (id) => {
    await axios.patch(
      `${urlApi}/todos/${id}/toggle`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    getTodos();
  };
  return (
    <div>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New Todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.content} {todo.status ? "完成" : "未完成"}|{" "}
            {todoEdit[todo.id]}
            <input
              type="text"
              placeholder="更新值"
              onChange={(e) => {
                const newTodoEdit = {
                  ...todoEdit,
                };
                newTodoEdit[todo.id] = e.target.value;
                setTodoEdit(newTodoEdit);
              }}
            />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => updateTodo(todo.id)}>Update</button>
            <button onClick={() => toggleStatus(todo.id)}>Toggle Status</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
