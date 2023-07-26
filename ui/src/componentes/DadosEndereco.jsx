import axios from 'axios';
import styles from './DadosEndereco.module.css';
import React, { useRef } from 'react';


function DadosEndereco(props) {
    const rua = useRef(null);
    const bairro = useRef(null);
    const cidade = useRef(null);
    const estado = useRef(null);


    function pesquisarLatilong(estado, cidade, bairro) {
        axios
            .get(
                `https://nominatim.openstreetmap.org/search?format=json&q=
        ${encodeURIComponent(estado)},
        ${encodeURIComponent(cidade)},
        ${encodeURIComponent(bairro)}`,
            )
            .then((response) => {
                props.setLatitude(response.data[0].lat);
                props.setLongitude(response.data[0].lon);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function pesquisarCep(cep) {
        axios
            .get(`https://viacep.com.br/ws/${cep}/json`)
            .then((response) => {
                rua.current.value = response.data.logradouro;
                props.setRua(response.data.logradouro);
                bairro.current.value = response.data.bairro;
                props.setBairro(response.data.bairro);
                cidade.current.value = response.data.localidade;
                props.setCidade(response.data.localidade);
                estado.current.value = response.data.uf;
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

    return (
        <>
            <div className={styles.dadosEndereco}>
                <h3> Dados de Endereco:</h3>
                <div className={styles.endereco}>
                    <h3>
                        Cep:
                    </h3>
                    <input value={props.cep} type="number" onBlur={(e) => { pesquisarCep(e.target.value) }} onChange={(e) => props.setCep(e.target.value)} className={styles.ipt} placeholder="00000-000" />
                    <h3>
                        Rua:
                    </h3>
                    <input ref={rua} value={props.rua} type="text" className={styles.ipt} placeholder="Rua Haddock Lobo" />
                    <h3>
                        Número:
                    </h3>
                    <input value={props.numero} type="number" onChange={(e) => props.setNumero(e.target.value)} className={styles.ipt} placeholder="595" />
                    <h3>
                        Bairro:
                    </h3>
                    <input value={props.bairro} ref={bairro} type="text" className={styles.ipt} placeholder="PQ. Boa Esperança" />
                    <h3>
                        Cidade:
                    </h3>
                    <input value={props.cidade} ref={cidade} type="text" className={styles.ipt} placeholder="São Paulo" />
                    <h3>
                        Estado:
                    </h3>
                    <input value={props.estado} ref={estado} type="text" className={styles.ipt} placeholder="SP" />
                </div>
            </div >

        </>
    );

}

export default DadosEndereco;
