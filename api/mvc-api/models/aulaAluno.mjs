import sequelize from "sequelize";
import Aula from "./aula.mjs";
import AlunoCurso from "./alunoCurso.mjs";

const AulaAluno = connection.define('aulaAluno', {
    fkAula: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Aula,
            key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
    },
    fkAlunoCurso: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: AlunoCurso,
            key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
    },
    pontuacao: {
        type: sequelize.DECIMAL,
        allowNull: true,
    }
}, {
    freezeTableName: true,
    timestamps: false,
    indexes: [
        {
            name: 'fk_aula_has_AlunoCompleto_AlunoCompleto1_idx',
            fields: ['fkAlunoCurso']
        },
        {
            name: 'fk_aula_has_AlunoCompleto_aula1_idx',
            fields: ['fkAula']
        }
    ]
});

export default AulaAluno;
