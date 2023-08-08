import React, { useEffect } from 'react';
import styles from './Sala.module.css';
import { useNavigate } from 'react-router-dom';
import axiosIntance from '../../config/axiosInstance';

function Sala(props) {
    const navigate = useNavigate();


    // useEffect(() => {
    // axiosIntance.get("http://localhost:3300/usuario/")
    // .then((response) => {
    //     if (response.status === 200) {
    //         console.log(response.data);
    //     }
    // }).catch((error) => {
    //     console.log(error);
    // });
    // }, []);

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
