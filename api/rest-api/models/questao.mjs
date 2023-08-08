import sequelize from "sequelize";
import Aula from "./aula.mjs";

const Questao = connection.define('questao', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    pergunta: {
        type: sequelize.STRING,
    },
    resposta: {
        type: sequelize.STRING,
    },
    fkAula: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Aula,
            key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
    }
}, {
    freezeTableName: true,
    timestamps: false,
    indexes: [{
        name: 'fk_Questao_aula1_idx',
        fields: ['fkAula']
    }]
});

export default Questao;
