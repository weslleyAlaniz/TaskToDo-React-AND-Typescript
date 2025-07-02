interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  concluida: boolean;
}

let tarefas: Tarefa[] = [
  { id: 1, titulo: "Tarefa 1", descricao: "Primeira tarefa", concluida: false },
  { id: 2, titulo: "Tarefa 2", descricao: "Segunda tarefa", concluida: true },
  { id: 3, titulo: "Tarefa 3", descricao: "Terceira tarefa", concluida: false },
];

export { tarefas, Tarefa };
