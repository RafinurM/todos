import { useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import TaskInput from "./components/TaskInput/TaskInput";
import type { Task } from "./types";
import TaskList from "./components/TaskList/TaskList";
import clsx from "clsx";

type TListStatus = "All" | "Active" | "Completed";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [listStatus, setListStatus] = useState<TListStatus>("All");
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    setFilteredTasks([...tasks, task]);
  };

  const toggleTaskCompletion = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    switch (listStatus) {
      case "All":
        setFilteredTasks(updatedTasks);
        break;
      case "Active":
        setFilteredTasks(updatedTasks.filter((task) => !task.completed));
        break;
      case "Completed":
        setFilteredTasks(updatedTasks.filter((task) => task.completed));
        break;
    }
  };

  const showAllTasks = () => {
    setFilteredTasks(tasks);
    setListStatus("All");
  };

  const showActiveTasks = () => {
    setFilteredTasks(tasks.filter((task) => !task.completed));
    setListStatus("Active");
  };

  const showCompletedTasks = () => {
    setFilteredTasks(tasks.filter((task) => task.completed));
    setListStatus("Completed");
  };

  const clearCompleted = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
    setFilteredTasks([]);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>todos</h1>
      <div className={styles.main}>
        <TaskInput addTask={addTask} />
        <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} />
        <div className={styles.bottom_menu}>
          <p className="item_count">
            {" "}
            {tasks.filter((task) => !task.completed).length} items left
          </p>
          <button
            className={clsx(
              styles.button,
              listStatus === "All" ? styles.button_active : ""
            )}
            onClick={showAllTasks}
          >
            All
          </button>
          <button
            className={clsx(
              styles.button,
              listStatus === "Active" ? styles.button_active : ""
            )}
            onClick={showActiveTasks}
          >
            Active
          </button>
          <button
            className={clsx(
              styles.button,
              listStatus === "Completed" ? styles.button_active : ""
            )}
            onClick={showCompletedTasks}
          >
            Completed
          </button>
          <button className={clsx(styles.button)} onClick={clearCompleted}>
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
