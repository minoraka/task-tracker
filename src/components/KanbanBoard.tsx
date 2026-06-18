import { mockTasks } from "../mock/tasks";
import Column from "./Column";

export function KanbanBoard() {
  return (
    <div className="board">
      <Column
        title="В планах"
        tasks={mockTasks.filter((t) => t.status === "todo")}
      />

      <Column
        title="В процессе"
        tasks={mockTasks.filter((t) => t.status === "in_progress")}
      />

      <Column
        title="Готово"
        tasks={mockTasks.filter((t) => t.status === "done")}
      />
    </div>
  );
}