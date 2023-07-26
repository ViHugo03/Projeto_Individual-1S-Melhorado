import styles from './DadosPessoais.module.css';

function DadosPessoais(props) {
    return (
        <>
            <div className={styles.dadosPessoais}>
                <h3> Dados Pessoais:</h3>
                <div className={styles.dados}>
                    <h3>Nome:</h3>
                    <input
                        onChange={(e) => props.setNome(e.target.value)}
                        type="text"
                        value={props.nome}
                        className={styles.ipt}
                        placeholder="Pedro Rocha"
                    />
                    <h3>Email:</h3>
                    <input
                        onChange={(e) => props.setEmail(e.target.value)}
                        type="text"
                        value={props.email}
                        className={styles.ipt}
                        placeholder="email.exemplo@gmail.com"
                    />
                    <h3>Senha:</h3>
                    <input
                        onChange={(e) => props.setSenha(e.target.value)}
                        type="password"
                        value={props.senha}
                        className={styles.ipt}
                        placeholder=" ********"
                    />
                    <h3>Confirmação de Senha:</h3>
                    <input
                        onChange={(e) => props.setConfirmacaoSenha(e.target.value)}
                        type="password"
                        value={props.confirmacaoSenha}
                        className={styles.ipt}
                        placeholder="********"
                    />

                </div>
            </div>
        </>
    )
}

export default DadosPessoais;
