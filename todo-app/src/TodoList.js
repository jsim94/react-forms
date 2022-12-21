import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [editing, setEditing] = useState(-2);

  const newTodo = ({ content }) => {
    setTodoList([...todoList, { content }]);
  };

  const startEdit = (id) => {
    console.log(id);
    setEditing(id);
  };

  const editTodo = (id, content) => {
    const listCopy = [...todoList];
    listCopy[id] = { content };
    setTodoList(listCopy);
    setEditing(-2);
  };

  const delTodo = (id) => {
    const listCopy = [...todoList];
    listCopy.splice(id, 1);
    setTodoList(listCopy);
  };

  return (
    <div className="TodoList">
      <NewTodoForm submit={newTodo} />
      <div className="TodoList-container">
        {todoList.map((todo, idx) => (
          <>
            <Todo
              content={todo.content}
              funcs={{ startEdit, delTodo }}
              id={idx}
              key={idx}
            />
            {+editing === idx ? (
              <EditTodoForm
                submit={editTodo}
                todo={{ id: idx, content: todo.content }}
              />
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
