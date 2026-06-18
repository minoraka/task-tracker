import type { Task } from "../types/task";

interface Props {
  title: string;
  tasks: Task[];
}

export default function TaskColumn({ title, tasks }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      {tasks.length}
    </div>
  );
}