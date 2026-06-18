import { useTaskStore } from "../store/taskStore";

export default function TaskBoard() {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div>
      <h1>TASKBOARD OK</h1>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}