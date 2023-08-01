import axios from 'axios';
import styles from './DadosEndereco.module.css';
import React, { useRef, useState } from 'react';

function DadosEndereco(props) {
    const rua = useRef(null);
    const bairro = useRef(null);
    const cidade = useRef(null);
    const estado = useRef(null);

    const [cepError, setCepError] = useState('');
    const [ruaError, setRuaError] = useState('');
    const [bairroError, setBairroError] = useState('');
    const [cidadeError, setCidadeError] = useState('');
    const [estadoError, setEstadoError] = useState('');
    const [numeroError, setNumeroError] = useState('');

    function pesquisarLatilong(estado, cidade, bairro) {
        axios
            .get(
                `https://nominatim.openstreetmap.org/search?format=json&q=
        ${encodeURIComponent(estado)},
        ${encodeURIComponent(cidade)},
        ${encodeURIComponent(bairro)}`,
            )
            .then((response) => {
                if (response.data.length > 0) {
                    props.setLatitude(response.data[0].lat);
                    props.setLongitude(response.data[0].lon);
                } else {
                    setCepError('Endereço não encontrado. Por favor, verifique o CEP.');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function pesquisarCep(cep) {
        if (!cep) {
            setCepError('O CEP é obrigatório.');
            return;
        }

        axios
            .get(`https://viacep.com.br/ws/${cep}/json`)
            .then((response) => {
                if (response.data.erro || !response.data.logradouro || !response.data.bairro || !response.data.localidade || !response.data.uf) {
                    setCepError('CEP inválido. Por favor, tente novamente.');
                    return;
                }
                setCepError('');
                rua.current.value = response.data.logradouro;
                bairro.current.value = response.data.bairro;
                cidade.current.value = response.data.localidade;
                estado.current.value = response.data.uf;
                props.setCep(cep);
                props.setRua(response.data.logradouro);
                props.setBairro(response.data.bairro);
                props.setCidade(response.data.localidade);
                props.setEstado(response.data.uf);
                pesquisarLatilong(
                    response.data.uf,
                    response.data.localidade,
                    response.data.bairro,
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleNumeroChange(e) {
        const value = e.target.value;
        if (value.length > 0) {
            props.setNumero(value);
            setNumeroError('');
        } else {
            setNumeroError('O número é obrigatório.');
        }
    }

    return (
        <>
            <div className={styles.dadosEndereco}>
                <h3> Dados de Endereço:</h3>
                <div className={styles.endereco}>
                    <h3>CEP:</h3>
                    <input
                        value={props.cep}
                        type="number"
                        onBlur={(e) => { pesquisarCep(e.target.value) }}
                        onChange={(e) => props.setCep(e.target.value)}
                        className={styles.ipt}
                        placeholder="00000-000"
                    />
                    {cepError && <p style={{ color: 'red' }}>{cepError}</p>}
                    <h3>Rua:</h3>
                    <input ref={rua} value={props.rua} type="text" className={styles.ipt} placeholder="Rua Haddock Lobo" />
                    <h3>Número:</h3>
                    <input value={props.numero} type="number" onBlur={handleNumeroChange} className={styles.ipt} placeholder="595" />
                    {numeroError && <p style={{ color: 'red' }}>{numeroError}</p>}
                    <h3>Bairro:</h3>
                    <input value={props.bairro} ref={bairro} type="text" className={styles.ipt} placeholder="PQ. Boa Esperança" />
                    <h3>Cidade:</h3>
                    <input value={props.cidade} ref={cidade} type="text" className={styles.ipt} placeholder="São Paulo" />
                    <h3>Estado:</h3>
                    <input value={props.estado} ref={estado} type="text" className={styles.ipt} placeholder="SP" />
                </div>
            </div>
        </>
    );
}

export default DadosEndereco;
