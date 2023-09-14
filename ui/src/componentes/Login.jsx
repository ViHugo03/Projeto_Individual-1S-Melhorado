import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import axiosInstance from "../../config/axiosInstance";
import axios from "axios";

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

    useEffect(() => {
        axios.get(`http://26.150.219.242:5000`)
            .then((response) => {
                let palavra = response.data.indexOf("cadastro");
                if (palavra >= 0) {
                    navigate("/cadastro");
                }
            }).catch((error) => {
                console.log(error);
            });

        if (location.state?.email) {
            setEmail(location.state?.email);
        }
        if (location.state?.senha) {
            setSenha(location.state?.senha);
        }
    }, [location.state?.email, location.state?.senha]);

    function logar() {
        axiosInstance.post(`http://localhost:3300/usuario/login`, body)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);

                    sessionStorage.setItem("token", response.data.token);

                    setTimeout(() => {
                        navigate("/sala");
                    }, 1000);
                }
            }).catch((error) => {
                console.log(error);
                if (error.response) {
                    switch (error.response.status) {
                        case 400:
                            setError("Email ou senha incorretos");
                            break;
                        case 401:
                            setError("Não autorizado");
                            break;
                    }
                }
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
                        <input type="password" defaultValue={location.state?.senha} placeholder="******" onChange={(e) => { setSenha(e.target.value) }} />
                        <h4 onClick={() => { navigate("/") }}>esqueci minha senha</h4>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mensagem de erro é exibida aqui */}
                    <button className={styles.botao_logar} onClick={logar}>Logar</button>
                </div>
            </div>
        </>
    );
}

export default Login;
