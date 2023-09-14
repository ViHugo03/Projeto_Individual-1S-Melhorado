import connection from "../../Config/DatabaseConfig.mjs";
import sequelize from "sequelize";

const Curso = connection.define('curso', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeCurso: {
        type: sequelize.STRING,
        allowNull: false, // Adicionado allowNull: false
    },
}, {
    freezeTableName: true,
    timestamps: false,
});

export default Curso;