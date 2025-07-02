import { Request, Response } from 'express';
import { tarefas, Tarefa } from '../database/database'; 

export default class ControllerTarefas {
  
    public listarTarefas(req: Request, res: Response): void {
        res.status(200).json({
            message: 'Lista de Tarefas',
            tarefas: tarefas
        });
    }

    public criarTarefa(req: Request, res: Response): void {
        const novaTarefa: Tarefa = {
            id: Date.now(),
            titulo: req.body.titulo,
            descricao: req.body.descricao || '',
            concluida: req.body.concluida || false
        };
        tarefas.push(novaTarefa);
        res.status(200).json({
            message: 'Tarefa criada com sucesso!',
            novaTarefa
        });
    }

    public atualizarTarefa(req: Request, res: Response): void {
        const { id } = req.params;
        const tarefaIndex = tarefas.findIndex(tarefa => tarefa.id === parseInt(id));
        if (tarefaIndex === -1) {
            res.status(404).json({
                message: 'Tarefa não encontrada!',
                success: false
            });
            return;
        }
        const tarefa = tarefas[tarefaIndex];
        tarefa.concluida = !tarefa.concluida;
        const statusMessage = tarefa.concluida ? 'concluída' : 'reaberta';
        res.status(200).json({
            message: `Tarefa ${statusMessage} com sucesso!`,
            tarefa,
            success: true
        });
    }

    public excluirTarefa(req: Request, res: Response): void {
        const { id } = req.params;
        const tarefaIndex = tarefas.findIndex(tarefa => tarefa.id === parseInt(id));
        if (tarefaIndex === -1) {
            res.status(404).json({
                message: 'Tarefa não encontrada!',
                success: false
            });
            return;
        }
        tarefas.splice(tarefaIndex, 1);
        res.status(200).json({
            message: 'Tarefa excluída com sucesso!',
            success: true
        });
    }
}