import React from "react";
import type { Task } from "../../types";
import styles from "./TaskItem.module.css";
import clsx from "clsx";

interface TaskItemProps {
  task: Task;
  toggleTaskCompletion: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion }) => {
  return (
    <li
      onClick={() => toggleTaskCompletion(task.id)}
      className={clsx(
        task.completed ? styles.completed : styles.uncompleted,
        styles.list_item
      )}
    >
      {task.text}
    </li>
  );
};

export default TaskItem;
