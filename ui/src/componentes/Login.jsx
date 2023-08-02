import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";

function Login(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(""); // Novo estado para armazenar o erro

    const location = useLocation();

    const body = {
        email: email,
        senha: senha,
    };
    console.log(body);

    function logar() {
        axios.post(`http://localhost:3300/usuario/login`, body)
            .then((response) => {
                console.log(response.data);
                alert("logado com sucesso");
                navigate("/");
            }).catch((error) => {
                console.log(error);
                setError("Email ou senha incorretos"); // Atualiza o estado do erro quando a requisição falhar
            });
    }

    return (
        <>
            <div className={styles.fundo}>
                <div className={styles.login}>
                    <h2>Seja Bem Vindo!</h2>
                    <div className={styles.dados}>
                        <h2>Email:</h2>
                        <input type="text" defaultValue={location.state?.email} placeholder="email.exemplo@gmail.com" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className={styles.dados}>
                        <h2>Senha:</h2>
                        <input type="password" defaultValue={location.state?.senha } placeholder="******" onChange={(e) => { setSenha(e.target.value) }} />
                    </div>
                    {error && <p style={{color: 'red'}}>{error}</p>} {/* Mensagem de erro é exibida aqui */}
                    <button className={styles.botao_logar} onClick={logar}>Logar</button>
                </div>
            </div>
        </>
    );
}

export default Login;
