import React from 'react';
import { useContext } from 'react';
import SimpleContext from './../context/SimpleContext';

const ToDo = ({
  name,
  done,
  deletFunc,
  editMode,
  changeEditMode,
  confirmEdit,
  doUndoTask,
}) => {
  const ctx = useContext(SimpleContext);
  let taskRow = null;
  var edit = `${editMode}` === "true";
  var isDone=`${done}`==="true";
  if (edit) {
    taskRow = (
      <form
        className="form-inline"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="row-task">
          <input
            type="text"
            placeholder={name}
            value={ctx.editedVal}
            className="add-input"
            onChange={ctx.handleEditTask}
          />
          <button
            type="submit"
            className="btn btn-sm fa fa-check btn-row"
            style={{ cursor: "pointer" }}
            onClick={confirmEdit}
          />
        </div>
      </form>
    );
  } else {
    taskRow = (
      <div className="row-task">
        {isDone ? <del>{name}</del> : `${name}`}

        <button
          className="btn btn-sm fa fa-trash btn-row"
          style={{ cursor: "pointer" }}
          onClick={deletFunc}
        />
        <button
          className="btn btn-sm fa fa-pencil btn-row"
          style={{ cursor: "pointer" }}
          onClick={changeEditMode}
        />
        <button
          className="btn btn-sm fa fa-check btn-row"
          style={{ cursor: "pointer" }}
          onClick={doUndoTask}
        />
      </div>
    );
  }
  return <div>{taskRow}</div>;
};
 
export default ToDo;