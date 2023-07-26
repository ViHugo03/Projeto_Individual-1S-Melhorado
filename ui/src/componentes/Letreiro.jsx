import React from "react";
import styles from "./Letreiro.module.css";
import { useLocation, useNavigate } from "react-router-dom";

function Letreiro() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.letreiro} onClick={() => {navigate("/cadastro")}}>
                <div className={styles.slide}>
                        <h4> Venha fazer parte da Keyboard e torne-se um musico independente!!!</h4>
                        <h4> Venha fazer parte da Keyboard e torne-se um musico independente!!!</h4>
                        <h4> Venha fazer parte da Keyboard e torne-se um musico independente!!!</h4>
                        <h4> Venha fazer parte da Keyboard e torne-se um musico independente!!!</h4>
                        <h4> Venha fazer parte da Keyboard e torne-se um musico independente!!!</h4>
                </div>
            </div>
        </>
    );
}

export default Letreiro;