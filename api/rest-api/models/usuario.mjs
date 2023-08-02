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
    },
    confirmacaoSenha: {
        type: sequelize.STRING,
    }
},{
    freezeTableName: true,
    timestamps: false,
});

export default Usuario;