import sequelize from "sequelize";
import Usuario from "./usuario.mjs";
import Curso from "./curso.mjs";

const AlunoCurso = connection.define('alunoCurso', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fkUsuario: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
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
    indexes: [
        {
            name: 'fk_usuario_has_curso_curso1_idx',
            fields: ['fkCurso']
        },
        {
            name: 'fk_usuario_has_curso_usuario1_idx',
            fields: ['fkUsuario']
        }
    ]
});

export default AlunoCurso;
