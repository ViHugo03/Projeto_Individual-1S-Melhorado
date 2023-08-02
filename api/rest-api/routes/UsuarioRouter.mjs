import express  from "express";
import * as usuarioController from '../controller/UsuarioController.mjs';

const usuarioRouter = express.Router();

usuarioRouter.get('/', (req, res) => {
    usuarioController.listarUsuarios(req, res);
    }
);

usuarioRouter.post('/', (req, res) => {
    usuarioController.cadastrarUsuario(req, res);
    }
);

usuarioRouter.post('/login', (req, res) => {
    usuarioController.login(req, res);
    }
);

export default usuarioRouter;