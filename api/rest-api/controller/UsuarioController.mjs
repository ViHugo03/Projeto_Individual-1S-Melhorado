import * as UsuarioRepository from "../repositories/UsuarioRepository.mjs"

export function listarUsuarios(req, res) {
    UsuarioRepository.listarUsuarios().then((usuario) => {
        res.send(usuario);
    });
}

export function cadastrarUsuario(req, res) {
    const usuario = req.body;
    let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!usuario.nome) {
        res.status(400).send("O campo nome é obrigatório");
        return;
    }
    if (usuario.nome.lenght < 3) {
        res.status(400).send("O campo nome deve ter no mínimo 3 caracteres");
        return;
    }
    if (!emailRegex.test(usuario.email)) {
        res.status(400).send("O campo email é inválido");
        return;
    }
    if (!usuario.senha) {
        res.status(400).send("O campo senha é obrigatório");
        return;
    }
    if (usuario.senha.lenght < 6) {
        res.status(400).send("A senha deve ter no mínimo 6 caracteres");
        return;
    }
    if (!usuario.confirmacaoSenha) {
        res.status(400).send("É necessário confirmar a senha");
        return;
    }
    if (usuario.senha !== usuario.confirmacaoSenha) {
        res.status(400).send("As senhas não coincidem");
        return;
    }
    else {
        UsuarioRepository.cadastrarUsuario(usuario)
            .then((usuario) => {
                res.status(201).send(usuario);
            });
    }
}

export function login(req, res) {
    const usuario = req.body;
    if (!usuario.email) {
        res.status(400).send("O campo email é obrigatório");
        return;
    }
    if (!usuario.senha) {
        res.status(400).send("O campo senha é obrigatório");
        return;
    }
    else {
        UsuarioRepository.login(usuario)
            .then((usuario) => {
                res.status(201).send(usuario);
            });
    }
}
