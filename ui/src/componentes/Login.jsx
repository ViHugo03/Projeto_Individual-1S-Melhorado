import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";

function Login(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const location = useLocation();

    const body = {
        email: email,
        senha: senha,
    };
    console.log(body);

    // function entrar() {
    //     aguardar();

    //     var emailVar = email_input.value;
    //     var senhaVar = senha_input.value;

    //     if (emailVar == "" || senhaVar == "") {
    //         cardErro.style.display = "block"
    //         mensagem_erro.innerHTML = "Todos os Campos devem estar preenchidos";
    //         finalizarAguardar();
    //         return false;
    //     }
    //     else {
    //         setInterval(sumirMensagem, 5000)
    //     }

    //     console.log("FORM LOGIN: ", emailVar);
    //     console.log("FORM SENHA: ", senhaVar);

    //     fetch("/usuarios/autenticar", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             emailServer: emailVar,
    //             senhaServer: senhaVar
    //         })
    //     }).then(function (resposta) {
    //         console.log("ESTOU NO THEN DO entrar()!")
    //         console.log(resposta);
    //         if (resposta.ok) {


    //             resposta.json().then(json => {
    //                 console.log(json.idAluno);
    //                 console.log(JSON.stringify(json));

    //                 sessionStorage.EMAIL_USUARIO = json.email;
    //                 sessionStorage.NOME_USUARIO = json.nome;
    //                 sessionStorage.ID_USUARIO = json.idAluno;

    //                 setTimeout(function () {
    //                     window.location = "sala.html";
    //                 }, 1000); // apenas para exibir o loading

    //             });

    //         } else {

    //             console.log("Houve um erro ao tentar realizar o login!");

    //             resposta.text().then(texto => {
    //                 console.error(texto);
    //                 finalizarAguardar(texto);
    //             });
    //         }

    //     }).catch(function (erro) {
    //         console.log(erro);
    //     })

    //     return false;
    // }

    // function sumirMensagem() {
    //     cardErro.style.display = "none"
    // }

    function logar() {
        axios.post(`http://localhost:3300/api/login`, body)
            .then((response) => {
                console.log(response.data);
                alert("logado com sucesso");
                navigate("/");
            }).catch((error) => {
                console.log(error);
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
                    <button className={styles.botao_logar} onClick={logar}>Logar</button>
                </div>
            </div>
        </>
    );
}

export default Login;