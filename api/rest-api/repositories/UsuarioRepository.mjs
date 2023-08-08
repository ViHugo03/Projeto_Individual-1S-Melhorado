import Usuario from "../models/usuario.mjs";

export function login(email) {
    return Usuario.findOne({
        where: {
            email: email
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