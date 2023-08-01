import React from 'react';
import styles from './Sala.module.css';

function Sala(props) {
    return (
        <div className={styles.fundo}>
            <div className={styles.container}>
                <div className={styles.sala}>
                    <h2>Seja bem vindo !!</h2>
                    <h3>Qual curso deseja fazer hoje?</h3>
                </div>
                <div className={styles.cursos}>
                    <div className={styles.curso}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sala;
