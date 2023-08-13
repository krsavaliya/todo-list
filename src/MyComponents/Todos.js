import React from "react";
import {Todoitems} from '../MyComponents/Todoitems';

export const Todos = (props) => {
  return (
  <div className="container">
    <h3 className="text-center my-3"> Todos List</h3>
      {props.todos.length===0?"No todos to display":
      props.todos.map((todo)=>{
        return <Todoitems todo={todo} onDelete={props.onDelete}/>
      })}
  </div>
  )
} 