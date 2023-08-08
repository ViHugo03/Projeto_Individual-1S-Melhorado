import * as UsuarioRepository from "../repositories/UsuarioRepository.mjs"
import Usuario from "../models/usuario.mjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

export async function listarUsuarios(res) {
    const usuarios = await Usuario.findAll()
    res.send(usuarios);
}

export async function cadastrarUsuario(req, res) {
    const usuario = req.body;
    let emailRegex = /^.+@.+\..+$/;

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
    else {
        const user = await Usuario.create(usuario);
        res.status(201).send(user);
    }
}

export async function login(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;
    let emailRegex = /^.+@.+\..+$/;

    if (!email) {
        res.status(400).send("O campo email é obrigatório");
        return;
    }
    if (!emailRegex.test(email)) {
        res.status(400).send("O campo email é inválido");
        return;
    }

    if (!senha) {
        res.status(400).send("O campo senha é obrigatório");
        return;
    }

    // Buscamos o usuário pelo e-mail
    const usuario = await UsuarioRepository.login(email);

    if (!usuario) {
        res.status(401).send("Email não encontrado");
        return;
    }

    // Comparando as senhas
    const match = await bcrypt.compare(senha, usuario.senha);

    if (!match) {
        res.status(401).send("Senha inválida");
        return;
    }

    // Gerando o token
    const token = jwt.sign({id : usuario.id }, process.env.JWT_SECRET, {
        expiresIn: '1h' // 1 hora
    });

    // Enviando o token na resposta
    res.status(200).send({ token: token });
}


