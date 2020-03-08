import React, { useState } from "react";
import "/src/styles/styles.css";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function App() {
  const [list, setList] = useState([]);

  function addTask(item) {
    console.log("item to add " + item);
    const newList = [...list, item];
    setList(newList);

    console.log("new list " + newList);
  }

  function onChecked(index) {
    console.log(`check box clicked`);
    const newList = [...list];
    console.log(list);
    newList[index].isChecked = !newList[index].isChecked;
    //console.log("newList = " + newList[index]);
    setList(newList);
    console.log(newList[index].isChecked);
  }

  function deleteTask(id) {
    console.log("delete clicked");
    // setList(prevList => {
    //   return prevList.filter((taskItem, index) => {
    //     return index !== id;
    //   });
    // });

    setList(function(oldList) {
      return oldList.filter(function(taskItem, index) {
        return index !== id;
      });
    });

    // const newList = [...list];
    // newList.splice(id, 1);
    // setList(newList);
  }

  function editTask(index) {
    console.log("edit clicked");
    const newList = [...list];
    newList[index].isEditMode = !newList[index].isEditMode;
    setList(newList);
  }

  return (
    <div className="App">
      <Header />
      <TodoForm addTask={addTask} />
      {list.map((taskItem, index) => {
        return (
          <TodoItem
            key={index}
            id={index}
            task={taskItem.task}
            isChecked={taskItem.isChecked}
            isEditMode={taskItem.isEditMode}
            onChecked={onChecked}
            onEdit={editTask}
            onDelete={deleteTask}
          />
        );
      })}
    </div>
  );
}
