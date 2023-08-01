import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import ClaveDeSol from "../assets/imgs/clave-de-sol.png";
import ClaveDeFa from "../assets/imgs/clave-de-fá.png";
import ClaveDeDo from "../assets/imgs/clave-de-dó.png";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.fundo}>
                <div className={styles.slogan}>
                    <p>
                        Junte-se a nós e deixe sua paixão pela música florescer!
                    </p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.boxes}>

                    <div className={styles.box}>
                        <img src={ClaveDeSol} />
                    </div>

                    <div className={styles.box}>
                        <img src={ClaveDeDo} />

                    </div>

                    <div className={styles.box}>
                        <img src={ClaveDeFa} />
                    </div>
                </div>
                <div className={styles.descricao}>
                    <h4>Musica</h4>
                    <p>
                        A origem da palavra música é grega. A etimologia está em musiké téchne, que significa a arte das musas,
                        divindades que cantavam as memórias do passado. A técnica da música consiste em arranjar sons em uma
                        sucessão, intercalados com períodos de silêncio, por um determinado período.
                        <br /><br />
                        Entendida desta forma, a música é uma linguagem, uma forma de comunicação. É uma linguagem tão real
                        quanto aquela que usamos para conversar, mas que vai além.
                        <br /><br />
                        Victor Hugo, grande dramaturgo, retratou a definição de música da seguinte forma: <span> “A música
                            expressa o que não pode ser dito em palavras mas não pode permanecer em silêncio” </span>.

                        <br /><br />
                        A música é a mais universal das artes. Sua presença se dá não apenas ao longo da história, mas também
                        nas mais variadas formas e culturas. A apreciação dessa arte não depende de língua ou nível cultural. É
                        o prazer
                        proporcionado por essa mistura de harmonia, ritmo, melodia e timbre o que realmente importa. Pois a
                        música está diretamente ligada ao encadeamento de emoções.
                        <br /><br />
                        As composições podem nos suscitar alegria ou tristeza, euforia ou paz de espírito. O espectro emocional
                        é vasto e pode unir diversas pessoas em um contexto social através de um mesmo sentimento.
                        <br /><br />
                        Os alunos podem desenvolver sua
                        expressão individual, traduzindo ideias, sentimentos e valores culturais através da música. Com isso
                        cria-se uma ponte entre o universo interior e exterior do indivíduo. O que permite ainda uma melhor
                        integração com o contexto social em que este vive.
                    </p>
                    <h4>Desânimo dos Estudantes</h4>
                    <p>
                        Contudo, Muitas pessoas que querem aprender a tocar algum instrumento musical, tem encontrado
                        dificuldades por conta dos altos custos nos cursos de Teclado/Piano, Violão, Bateria, Baixo, Guitarra
                        entre outros instrumentos, que tem feito elas perderem a vontade de aprender, por muitas vezes não terem
                        condições de bancar os estudos.
                        <br /><br />
                        O preço médio por hora de uma aula de teclado em algumas plataformas digitais chega a custar
                        <span> R$60,00</span> (De acordo com a plataforma <a
                            href="https://www.superprof.com.br/blog/quanto-cobrar-como-profe-pianista/" target="_blank">SuperProf</a> valor
                        referente a aulas ministradas em São Paulo), fazendo um breve calculo acerca da quantidade de horas de
                        estudo que um aluno iniciante necessita, (3 horas semanais no mínimo) multiplicando pelo valor da hora
                        de aula, chegamos a conclusão que em um ano de curso, um aluno pode chegar a ter que investir
                        <span> R$8.640,00</span> para ter aulas particulares, em cursos presenciais o valor pode variar em torno
                        de <span> R$200,00</span> ao mês, um valor que muitas vezes é alto dependendo da situação financeira da
                        pessoa.
                        <br /><br />
                        A <b>Keyboard</b> foi criada para ajudar você aluno a não desistir do seu sonho de ser musico, com aulas de conteúdo exclusivo,
                        imagens demonstrativas, videos explicativos mostrando o passo a passo de como fazer as tarefas e atividades de fixação de conteúdo,
                        para poder proporcionar o melhor ambiente de aprendizado há você.
                        <br /><br />
                        As aulas ministradas pela Keyboard são totalmente gratuitas, então não se preocupe, cadastre-se e inicie seu curso agora mesmo.
                        <br /><br />
                        <b>Clique em  <a onClick={() => { navigate("/cadastro") }}>Cadastre-se</a> e não perca mais tempo e venha ser nosso aluno!</b>
                    </p>
                </div>
            </div >
        </>
    );
}

export default Home;