import type { ITask } from "../types/task";

export const mockTasks: ITask[] = [
  {
    id: "1",
    title: "Создать макет",
    description: "Сверстать первую колонку",
    status: "todo",
    createdAt: "2026-06-18",
  },
  {
    id: "2",
    title: "Настроить API",
    description: "Подготовить axios",
    status: "in_progress",
    createdAt: "2026-06-18",
  },
  {
    id: "3",
    title: "Проверить проект",
    description: "Провести тестирование",
    status: "done",
    createdAt: "2026-06-18",
  },
];