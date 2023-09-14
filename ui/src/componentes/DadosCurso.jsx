import { useState } from "react";
import styles from "./DadosCurso.module.css";
import { useNavigate } from "react-router-dom";

function DadosCurso(props) {
    const cursos = [
        { id: 1, nome: "Teclado/Piano" },
        { id: 2, nome: "Violão" },
        { id: 3, nome: "Guitarra" },
        { id: 4, nome: "Baixo" },
        { id: 5, nome: "Bateria" }
    ];

    function adicionaCurso(cursoInserir) {
        const vetorNovo = [...props.curso];
        const index = vetorNovo.indexOf(cursoInserir.id);
        if (index !== -1) {
            vetorNovo.splice(index, 1);
        } else {
            vetorNovo.push(cursoInserir.id);
        }
        props.setCurso(vetorNovo);
    }

    return (
        <div className={styles.container}>
            <h3>Dados Curso:</h3>
            <div className={styles.dadosCurso}>
                <div className={styles.curso}>
                    <h3>Cursos:</h3>
                    {cursos.map((curso, index) => (
                        <div key={index} className={styles.ipt_curso}>
                            <input
                                onClick={() => {
                                    adicionaCurso(curso);
                                }}
                                type="checkbox"
                                value={curso.nome}
                            />
                            <b>{curso.nome}</b>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DadosCurso;
