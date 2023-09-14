import sequelize from "sequelize";
import Curso from "./curso.mjs";

const Aula = connection.define('aula', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeAula: {
        type: sequelize.STRING,
    },
    fkCurso: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Curso,
            key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
    }
}, {
    freezeTableName: true,
    timestamps: false,
    indexes: [{
        name: 'fk_aula_curso1_idx',
        fields: ['fkCurso']
    }]
});

export default Aula;
