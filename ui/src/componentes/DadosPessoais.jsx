import styles from './DadosPessoais.module.css';
import React, { useState } from 'react';

function DadosPessoais(props) {
    const [nomeTemp, setNomeTemp] = useState('');
    const [emailTemp, setEmailTemp] = useState('');
    const [senhaTemp, setSenhaTemp] = useState('');
    const [confirmacaoSenhaTemp, setConfirmacaoSenhaTemp] = useState('');

    const [nomeError, setNomeError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [senhaError, setSenhaError] = useState('');
    const [confirmacaoSenhaError, setConfirmacaoSenhaError] = useState('');

    const handleNomeChange = (e) => {
        const newNome = e.target.value;
        setNomeTemp(newNome);
        if (newNome.length >= 3) {
            props.setNome(newNome);
            setNomeError('');
        } else {
            setNomeError('O nome deve ter pelo menos 3 caracteres');
        }
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmailTemp(newEmail);
        if (validateEmail(newEmail)) {
            props.setEmail(newEmail);
            setEmailError('');
        } else {
            setEmailError('Por favor, insira um email válido');
        }
    };

    const handleSenhaChange = (e) => {
        const newSenha = e.target.value;
        setSenhaTemp(newSenha);
        if (newSenha.length < 6) {
            setSenhaError('A senha deve ter mais que 6 caracteres');
        }
        else {
            setSenhaError('');
        }
    };

    const handleConfirmacaoSenhaChange = (e) => {
        const newConfirmacaoSenha = e.target.value;
        setConfirmacaoSenhaTemp(newConfirmacaoSenha);
        if (newConfirmacaoSenha !== senhaTemp) {
            setConfirmacaoSenhaError('As senhas não correspondem');
        } else {
            setConfirmacaoSenhaError('');
            if (newConfirmacaoSenha === senhaTemp) {
                props.setSenha(senhaTemp);
                props.setConfirmacaoSenha(newConfirmacaoSenha);
            }
        }
    };

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <>
            <div className={styles.dadosPessoais}>
                <h3> Dados Pessoais:</h3>
                <div className={styles.dados}>
                    <h3>Nome:</h3>
                    <input
                        onChange={handleNomeChange}
                        type="text"
                        value={nomeTemp}
                        className={styles.ipt}
                        placeholder="Pedro Rocha"
                    />
                    {nomeError && <p>{nomeError}</p>}
                    <h3>Email:</h3>
                    <input
                        onChange={handleEmailChange}
                        type="text"
                        value={emailTemp}
                        className={styles.ipt}
                        placeholder="email.exemplo@gmail.com"
                    />
                    {emailError && <p>{emailError}</p>}
                    <h3>Senha:</h3>
                    <input
                        onChange={handleSenhaChange}
                        type="password"
                        value={senhaTemp}
                        className={styles.ipt}
                        placeholder=" ********"
                    />
                    {senhaError && <p>{senhaError}</p>}
                    <h3>Confirmação de Senha:</h3>
                    <input
                        onChange={handleConfirmacaoSenhaChange}
                        type="password"
                        value={confirmacaoSenhaTemp}
                        className={styles.ipt}
                        placeholder="********"
                    />
                    {confirmacaoSenhaError && <p>{confirmacaoSenhaError}</p>}
                </div>
            </div>
        </>
    )
}

export default DadosPessoais;
