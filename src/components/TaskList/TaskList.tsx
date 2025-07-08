import React from "react";
import type { Task } from "../../types";
import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion }) => {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;
