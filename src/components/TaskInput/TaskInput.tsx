import React, { useState } from "react";
import type { Task } from "../../types";
import styles from "./TaskInput.module.css";

interface TaskInputProps {
  addTask: (task: Task) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask({ id: Date.now(), text: inputValue, completed: false });
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className={styles.task}>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="Что нужно сделать?"
      />
      <button className={styles.button_add} onClick={handleAddTask}>
        Добавить
      </button>
    </div>
  );
};

export default TaskInput;
