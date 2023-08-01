import React, { useState } from "react";
import styles from "./Cadastro.module.css";
import DadosEndereco from "./DadosEndereco"
import DadosPessoais from "./DadosPessoais"
import DadosCurso from "./DadosCurso";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Cadastro(props) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("")
    const [cep, setCep] = useState("")
    const [rua, setRua] = useState("")
    const [numero, setNumero] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [curso, setCurso] = useState([])
    const [diaAula, setDiaAula] = useState([])
    const navigate = useNavigate();

    const requestBody = {
        nome: nome,
        email: email,
        senha: senha,
        confirmacaoSenha: confirmacaoSenha,
        cep: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        latitude: latitude,
        longitude: longitude,
        curso: curso,
        diaAula: diaAula,
    };

    console.log(requestBody);

    function cadastrar() {
        for (let key in requestBody) {
            if (requestBody[key] == "" || requestBody[key] == [] || requestBody[key] == null) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
        }

        setTimeout(() => {
            navigate("/login", { state: { email: email, senha: senha } });
        }, 1000);
    }

    return (
        <>
            <div className={styles.fundo}>
                <div className={styles.dadosPessoais}>
                    <DadosPessoais setNome={setNome} setEmail={setEmail}
                        setSenha={setSenha} setConfirmacaoSenha={setConfirmacaoSenha} />
                </div>
                <div className={styles.endereco}>
                    <DadosEndereco setCep={setCep} setRua={setRua} setNumero={setNumero}
                        setBairro={setBairro} setCidade={setCidade} setEstado={setEstado}
                        setLatitude={setLatitude} setLongitude={setLongitude} />
                </div>
                <div className={styles.dadosCurso}>
                    <DadosCurso setCurso={setCurso} setDiaAula={setDiaAula} curso={curso} diaAula={diaAula}
                    />

                    <button className={styles.cadastrar} onClick={cadastrar}> Cadastrar</button>
                </div>
            </div>
        </>
    );
}

export default Cadastro;