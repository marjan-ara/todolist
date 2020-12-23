import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "./../components/Header";
import NewTask from "./../components/NewTask";
import SimpleContext from "./../context/SimpleContext";
import ToDoList from "./../components/ToDoList";

const App = () => {
  const [getToDoList, setToDoList] = useState([]);
  const [getNewVal, setNewVal] = useState("");
  const [getEditedVal, setEditedVal] = useState("");
  const [getTotalTasks, setTotalTasks] = useState(0);
  const handleNewTask = (event) => {
    const newVal = event.target.value;
    setNewVal(newVal);
  };
  const handleEditTask = (event) => {
    const edited = event.target.value;
    setEditedVal(edited);
  };
  const handleDeleteTask = (code) => {
    const lst = [...getToDoList];
    const filteredLst = lst.filter((t) => t.code !== code);
    setToDoList(filteredLst);
    setTotalTasks(getTotalTasks - 1);
  };
  const changeEditMode = (code) => {
    const tasks = [...getToDoList];
    tasks.map((t) =>
      t.code !== code ? (t.editMode = false) : (t.editMode = !t.editMode)
    );
    setToDoList(tasks);
  };
  const confirmEdit = (code) => {
    const todos = [...getToDoList];
    const index = todos.findIndex((t) => t.code === code);
    const t = todos[index];
    if (getEditedVal !== "") t.val = getEditedVal;
    setEditedVal("");
    t.editMode = false;
    todos[index] = t;
    setToDoList(todos);
  };

  const doUndoTask = (code) => {
    const todos = [...getToDoList];
    const index = todos.findIndex((t) => t.code === code);
    const t = todos[index];
    t.done = !t.done;
    if (t.done) setTotalTasks(getTotalTasks - 1);
    else setTotalTasks(getTotalTasks + 1);
    todos[index] = t;
    setToDoList(todos);
  };
  const addNewTask = () => {
    if (getNewVal !== "") {
      const newCode = getToDoList.length + 1;
      const newtask = {
        code: newCode,
        val: getNewVal,
        editMode: false,
        done: false,
      };
      const lst = [...getToDoList];
      lst.push(newtask);
      setToDoList(lst);
      setTotalTasks(getTotalTasks+1);
      setNewVal("");
      toast.success("یه کار جدید اومد تو لیست", {
        position: "bottom-right",
        autoClose: "1000",
        closeOnClick: true,
        pauseOnHover: true,
      });
    } else {
      toast.error("اسم کاری که میخواهی انجام بدی وارد کن", {
        position: "bottom-left",
        autoClose: "1000",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };
  return (
    <SimpleContext.Provider
      value={{
        todoList: getToDoList,
        newVal: getNewVal,
        handleNewTask: handleNewTask,
        addNewTask: addNewTask,
        handleDeleteTask: handleDeleteTask,
        changeEditMode: changeEditMode,
        handleEditTask: handleEditTask,
        editedVal: getEditedVal,
        confirmEdit: confirmEdit,
        doUndoTask: doUndoTask,
        totalTasks: getTotalTasks,
      }}
    >
      <div className="centered">
        <Header />
        <NewTask />
        <ToDoList />
        <ToastContainer />
      </div>
    </SimpleContext.Provider>
  );
};

export default App;
