"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
class ControllerTarefas {
    listarTarefas(req, res) {
        res.status(200).json({
            message: 'Lista de Tarefas',
            tarefas: database_1.tarefas
        });
    }
    darOi(req, res) {
        res.status(200).json({
            message: 'Oi, tudo bem?'
        });
    }
    criarTarefa(req, res) {
        database_1.tarefas.push(req.body);
        res.status(200).json({
            message: 'Tarefa criada com sucesso!',
            tarefas: database_1.tarefas
        });
    }
}
exports.default = ControllerTarefas;
//# sourceMappingURL=controllerTarefas.js.map