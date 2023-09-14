import React, { useState } from "react";
import styles from "./Cadastro.module.css";
import DadosPessoais from "./DadosPessoais";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axiosInstance";
import bcrypt from "bcryptjs";

function Cadastro(props) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("")
    const navigate = useNavigate();

    const requestBody = {
        nome: nome,
        email: email,
        senha: senha
    };

    // const salt = await bcrypt.genSalt();
    // usuario.senha = await bcrypt.hash(usuario.senha, salt);

    console.log(requestBody);

    function cadastrar() {
        for (let key in requestBody) {
            if (!requestBody[key]) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(senha, salt);

        const requestBodyToSend = {
            ...requestBody,
            senha: hashedPassword   // Use the hashed password
        };
        axiosInstance.post("/usuario", requestBodyToSend)
            .then((response) => {
                console.log(response.data);

                sessionStorage.setItem("idUsuario", response.data.id);

                if (response.status == 201) {
                    setTimeout(() => {
                        navigate("/login", { state: { email: email, senha: senha } });
                    }, 1000);
                }
            }
            ).catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className={styles.fundo}>
                <div className={styles.dadosPessoais}>
                    <DadosPessoais setNome={setNome} setEmail={setEmail}
                        setSenha={setSenha} setConfirmacaoSenha={setConfirmacaoSenha} />
                    <button className={styles.cadastrar} onClick={cadastrar}> Cadastrar</button>
                </div>
            </div>
        </>
    );
}

export default Cadastro;