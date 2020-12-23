import React from "react";
import SimpleContext from "./../context/SimpleContext";
import ToDo from "./ToDo";
import { useContext } from "react";

const ToDoList = () => {
  const ctx = useContext(SimpleContext);
  return (
    <div>
      {ctx.todoList.length > 0 ? (
        ctx.todoList.map((todo) => (
          <ToDo
            key={todo.code}
            name={todo.val}
            done={todo.done}
            deletFunc={() => ctx.handleDeleteTask(todo.code)}
            editMode={todo.editMode}
            changeEditMode={() => ctx.changeEditMode(todo.code)}
            confirmEdit={()=>ctx.confirmEdit(todo.code)}
            doUndoTask={()=>ctx.doUndoTask(todo.code)}
          />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ToDoList;
