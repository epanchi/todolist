import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  // Arroy function stored over an CONSTANT
  const onClickButton = (msg) => {
    console.log(msg);
  };
  return (
    <button className="CreateTodoButton" onClick={ ()=>onClickButton('Modal de ingreso')}>
      +
    </button>
  );
}

export { CreateTodoButton };
