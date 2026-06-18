import type { Task } from "../types/task";

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
}