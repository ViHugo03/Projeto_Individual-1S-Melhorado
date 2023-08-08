import bcrypt from 'bcrypt';
import connection from "../../Config/DatabaseConfig.mjs";
import sequelize from "sequelize";

const Usuario = connection.define('usuario', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize.STRING,
    },
    email: {
        type: sequelize.STRING,
    },
    senha: {
        type: sequelize.STRING,
    }
}, {
    freezeTableName: true,
    timestamps: false,
    hooks: {
        beforeCreate: async (usuario) => {
            const salt = await bcrypt.genSalt();
            usuario.senha = await bcrypt.hash(usuario.senha, salt);
        }
    }
});

export default Usuario;
