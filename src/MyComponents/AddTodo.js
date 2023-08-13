import React, { useState } from "react";

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or descrition is not defined")
        }
        props.addTodo(title,desc);
    }
  return (
    <div className="container">
        <h3 className="text-center">Add a ToDo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            value={title} onChange={(e)=>setTitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Discription
          </label>
          <input
            type="text"
            value={desc} onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
