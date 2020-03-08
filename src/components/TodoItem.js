import React from "react";
import "/src/styles/styles.css";

function TodoItem(props) {
  function deleteItem(event) {
    props.onDelete(props.id);
  }

  function editItem(event) {
    props.onEdit(props.id);
  }

  function checkItem(index) {
    props.onChecked(props.id);
  }

  return (
    <li>
      <div className="item-container">
        <div className="item-check">
          <input className="checkbx" type="checkbox" onChange={() => checkItem(props.index)} />
          <p
            className="todo-task"
            style={{
              textDecoration: props.isChecked ? "line-through" : "",
              display: props.isEditMode ? "none" : "block"
            }}
          >
            {props.task}
          </p>
          <input className="editInputBox" type="text" style={{ display: props.isEditMode ? "block" : "none"}} value={props.task}/> 
          {/* onChange={(e) => editItem(e.target.value,props.index)} /> */}
        </div>
        <div className="item-buttons">
          <button className="button" onClick={editItem} value="Edit">
            Edit
          </button>
          <button className="button" onClick={deleteItem}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;


