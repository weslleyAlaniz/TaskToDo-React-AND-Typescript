import { Router } from 'express';
import ControllerTarefas from '../controllers/controllerTarefas';

const rotas = Router();
const controllerTarefas = new ControllerTarefas();

rotas.get('/listar', controllerTarefas.listarTarefas.bind(controllerTarefas));
rotas.post('/criar', controllerTarefas.criarTarefa.bind(controllerTarefas));
rotas.put('/atualizar/:id', controllerTarefas.atualizarTarefa.bind(controllerTarefas));
rotas.delete('/excluir/:id', controllerTarefas.excluirTarefa.bind(controllerTarefas));

export default rotas;
