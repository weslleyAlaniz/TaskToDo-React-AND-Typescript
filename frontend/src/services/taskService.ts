export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const API_URL = "http://localhost:3001";

export async function fetchTasks(): Promise<Task[]> {
  const res = await fetch(`${API_URL}/listar`);
  const data = await res.json();
  return data.tarefas.map((t: any) => ({
    id: t.id,
    title: t.titulo,
    completed: t.concluida,
  }));
}

export async function createTask(title: string): Promise<void> {
  await fetch(`${API_URL}/criar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo: title }),
  });
}

export async function updateTaskStatus(
  id: number,
  completed: boolean
): Promise<void> {
  await fetch(`${API_URL}/atualizar/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ concluida: completed }),
  });
}

export async function deleteTaskById(id: number): Promise<void> {
  await fetch(`${API_URL}/excluir/${id}`, {
    method: "DELETE",
  });
}
