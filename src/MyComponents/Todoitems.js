import React from "react";

export const Todoitems = ({ todo, onDelete }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button type="button" className="btn btn-sm  btn-danger" onClick={()=>onDelete(todo)}>Danger</button>
    </div>
  );
};
