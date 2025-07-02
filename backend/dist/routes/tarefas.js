"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerTarefas_1 = __importDefault(require("../controllers/controllerTarefas"));
const rotas = (0, express_1.Router)();
const controllerTarefas = new controllerTarefas_1.default();
rotas.get('/listar', controllerTarefas.listarTarefas.bind(controllerTarefas));
rotas.get('/oi', controllerTarefas.darOi.bind(controllerTarefas));
exports.default = rotas;
//# sourceMappingURL=tarefas.js.map