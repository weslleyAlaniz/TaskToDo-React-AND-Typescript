"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tarefas_1 = __importDefault(require("./routes/tarefas"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// Usando as rotas
app.use('/', tarefas_1.default);
// Rota de teste
app.get('/', (req, res) => {
    res.json({
        message: 'API funcionando!',
        rotas: [
            'GET /api/tarefas - Listar tarefas',
            'GET /api/tarefas/oi - Dizer oi'
        ]
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map