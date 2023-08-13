import React from "react";

export const Footer = () => {
  let footerstyle = {
    position: "reletive",
    top: "70vh",
    width: "100%",
  }
  return (
    <div className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">CopyRight &copy; MyTodosList.com</p>
    </div>
  );
};
