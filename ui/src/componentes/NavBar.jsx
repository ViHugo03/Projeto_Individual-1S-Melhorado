import styles from "./NavBar.module.css";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    const uselocation = useLocation();
    const isNav = useLocation().pathname == "/" || useLocation().pathname == "/login" || useLocation().pathname == "/cadastro";
    return (
        <>
            <div className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.titulo}>Cadence</h1>

                    {isNav ?
                        <ul className={styles.navbar}>
                            <li className={uselocation.pathname == "/" && styles.agora}>
                                <p onClick={() => { navigate("/") }}>Home</p>
                            </li>
                            <li><p>|</p></li>
                            <li className={uselocation.pathname == "/login" && styles.agora}>
                                <p onClick={() => { navigate("/login") }}>Login</p>
                            </li>
                            <li><p>|</p></li>
                            <li className={uselocation.pathname == "/cadastro" && styles.agora}>
                                <p onClick={() => { navigate("/cadastro") }}>Cadastro</p>
                            </li>
                        </ul>
                        :
                        <div className={styles.sair}>
                            <p>SAIR</p>
                            
                        </div>}

                </div>
            </div>


        </>
    );
}

export default NavBar;