import React, { useContext } from "react";
import SimpleContext from "./../context/SimpleContext";
const NewTask = () => {
  const ctx = useContext(SimpleContext);
//   const focusInput = useRef(null);
//   useEffect(() => {
//     focusInput.current.focus();
//   });
  return (
    <div>
      <form
        className="form-inline justify-content-center"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="input-group-task">
          <input
            type="text"
             placeholder="یه کار جدید انجام بده"
            value={ctx.newVal}
            className="add-input"
            onChange={ctx.handleNewTask}
          />
          <button
            type="submit"
            onClick={ctx.addNewTask}
            className="btn add-btn"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
