import { createContext } from "react";

const SimpleContext = createContext({
  todoList: [],
  newVal: "",
  editedVal: "",
  totalTasks:0,
  handleDeleteTask: () => {},
  handleNewTask: () => {},
  addNewTask: () => {},
  changeEditMode: () => {},
  handleEditTask: () => {},
  confirmEdit: () => {},
  doUndoTask:()=>{}
});

export default SimpleContext;
