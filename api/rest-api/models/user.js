var connection = require('../../database/config.js');

exports.findById = async (id) => {
    const rows = await connection.executar(`SELECT * FROM usuario WHERE id = '${id}'`);
    return rows;
}

exports.findAll = async () => {
    const rows = await connection.executar('SELECT * FROM usuario');
    return rows;
}

exports.create = async (newUser) => {
    const { nome, email, senha } = newUser;
    const result = await connection.executar(
        `INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');`
    );
    newUser.id = result.insertId;
    return newUser;
}

exports.login = async (user) => {
    const { email, senha } = user;
    const usuario = await connection.executar(`SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}'`);
    return usuario;
}

exports.update = async (id, updatedUser) => {
    const { nome, email, senha } = updatedUser;
    const [rows] = await connection.executar(
        `UPDATE usuario SET nome = '${nome}', email = '${email}', senha = '${senha}' WHERE id = '${id}'`
    );
    if (rows.affectedRows === 0) {
        throw new Error('User not found');
    }
    return updatedUser;
}

exports.delete = async (id) => {
    const [rows] = await connection.executar(`DELETE FROM usuario WHERE id = ${id}'`);
    if (rows.affectedRows === 0) {
        throw new Error('User not found');
    }
    return { message: "User deleted successfully" };
}
