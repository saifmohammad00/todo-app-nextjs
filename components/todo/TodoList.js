import { useState } from "react";

function TodoList(props) {
  return (
      <ul style={{ listStyle: "none" }}>
        {props.data.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => props.hToggle(todo.id)}
            />
            {todo.text}
            <button onClick={() => props.hDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
  );
}
export default TodoList;
