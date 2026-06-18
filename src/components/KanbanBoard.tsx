  import TaskColumn from "./Column";
  import { useTaskStore } from "../store/taskStore";

  export default function KanbanBoard() {
    const tasks = useTaskStore((state) => state.tasks);

    return (
      <div className="board">
        <TaskColumn
          title="To Do"
          tasks={tasks.filter((t) => t.status === "todo")}
        />

        <TaskColumn
          title="In Progress"
          tasks={tasks.filter((t) => t.status === "in_progress")}
        />

        <TaskColumn
          title="Done"
          tasks={tasks.filter((t) => t.status === "done")}
        />
      </div>
    );
  }