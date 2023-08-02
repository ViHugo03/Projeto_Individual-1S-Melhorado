import Usuario from "../models/usuario.mjs";

export function listarUsuarios() {
    return Usuario.findAll();
}

export function listarUsuarioPorId(id) {
    return Usuario.findByPk(id);
}

export function cadastrarUsuario(usuario) {
    return Usuario.create(usuario);
}

export function login(usuario) {
    return Usuario.findOne({
        where: {
            email: usuario.email,
            senha: usuario.senha,
        },
    });
}

export function atualizarUsuario(usuario) {
    return Usuario.update(usuario, {
        where: {
            id: usuario.id,
        },
    });
}

export function removerUsuario(id) {
    return Usuario.update({
        ativo: false,
        where: {
            id: id,
        },
    });
}