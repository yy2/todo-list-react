import React, { useState } from "react";

function TodoForm(props) {
  const [todoItem, setTodoItem] = useState({
    task: "",
    isChecked: false,
    isEditMode: false
  });
  //const [task, setTask ] = useState("");

  function submitEvent(event) {
    event.preventDefault();
    console.log("add button clicked");
    //setTask(todoItem);
    props.addTask(todoItem);
    setTodoItem({task: ""});
  }

  // function handleChange(event) {
  //   const { value } = event.target;
  //   console.log("value " + value);
  //   setTodoItem(prevItem => {
  //     return {
  //       ...prevItem,
  //       task: value
  //     };
  //   });
  // }

  return (
    <div className="input-container">
      <form className="todo-form" onSubmit={submitEvent}>
        <label>What are we doing today?</label>
        <br />
        <input
          type="text"
          className="todo-input"
          value={todoItem.task}
          onChange={e => setTodoItem({task: e.target.value})}
          placeholder="Tasks?"
        />
        <button type="submit">Add</button>
      </form>
      {/* Task: {task} */}
    </div>
  );
}

export default TodoForm;
