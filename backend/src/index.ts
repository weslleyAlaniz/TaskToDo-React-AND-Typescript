import express from "express";
import rotasTarefas from "./routes/tarefas";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Usando as rotas
app.use(rotasTarefas);

// Rota de teste
app.get("/", (req, res) => {
  res.json({
    message: "API funcionando!",
    rotas: [
      "GET /listar - Listar tarefas",
      "POST /criar - Criar tarefa",
      "PUT /atualizar/:id - Atualizar tarefa",
      "DELETE /excluir/:id - Deletar tarefa",
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
